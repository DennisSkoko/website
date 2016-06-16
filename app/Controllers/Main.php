<?php

namespace Controllers;

use Cmfcmf\OpenWeatherMap;
use DS\IP\IpInfo;
use DS\Utilities\GeoLocation;
use DS\Utilities\Markdown;
use DS\Utilities\Url;
use DS\Weather\Weather;
use Honth\FileHandler\Path;
use Honth\Renderer\View;
use Honth\Validation\Validator;
use Slim\Http\Request;

/**
 * Class Main
 *
 * The Main controller for the app
 *
 * @package Controllers
 * @author  Dennis Skoko
 */
class Main extends Controller
{
    /**
     * Home Page
     */
    public function home()
    {
        // For weather widget
        $this->theme->set("stylesheets", ["style/css/weather.css"]);

        $ipinfo = IpInfo::fetch("loc")->from($_SERVER["REMOTE_ADDR"])->getLoc();

        if ($ipinfo !== null) {
            $geoLoc = new GeoLocation();
            $geoLoc->setLocation($ipinfo);
            $weather = $this->getCurrentWeather($geoLoc);
        } else {
            $weather = null;
            $this->services->logger->notice("Couldn't get weather because of ipinfo did not give a location", [
                "ip" => $_SERVER["REMOTE_ADDR"],
            ]);
        }

        $feature = Markdown::file(Path::make(["app", "Resources", "Content"], "welcome.md"));

        $this->theme->with([
            "feature" => View::make("widgets.jumbotron")->with(["content" => $feature]),
            "main" => View::make("pages.home", compact("weather")),
        ]);

        return $this->theme->render();
    }


    /**
     * About Page
     */
    public function about()
    {
        $content = Markdown::file(Path::make(["app", "Resources", "Content"], "about.md"));

        $this->theme->with([
            "title" => "About",
            "main" => View::make("widgets.main.text")->with(compact("content")),
        ]);

        return $this->theme->render();
    }


    /**
     * Contact Page
     */
    public function contact()
    {
        $data = $this->services->session->pull("formData", []);

        return $this->theme->with([
            "title" => "Contact",
            "main" => View::make("widgets.contact-form", compact("data")),
        ])->render();
    }


    /**
     * Process for Email from Contact
     *
     * @param Request $request
     */
    public function processEmail(Request $request)
    {
        $post = $request->getParsedBody();

        // Redirect when an invalid request has been made.
        if (!isset($post["name"], $post["email"], $post["subject"], $post["message"])) {
            $this->services->logger->info(
                "Someone tried to enter the Main::processEmail() with the necessary post values"
            );
            header("Location:" . Url::make("/"));
            exit;
        }

        // Filter the values
        $post = [
            "name" => htmlspecialchars($post["name"]),
            "email" => htmlspecialchars($post["email"]),
            "subject" => htmlspecialchars($post["subject"]),
            "message" => htmlspecialchars($post["message"]),
        ];

        $validator = new Validator();
        $validator->check($post, [
            "name" => [
                "required" => true,
            ],

            "email" => [
                "required" => true,
                "email" => true,
            ],

            "subject" => [
                "required" => true,
            ],

            "message" => [
                "required" => true,
                "minlength" => 10,
            ],
        ]);

        if ($validator->fails()) {
            $this->services->session->push("flash", [
                "status" => "warning",
                "title" => "Couldn't fulfil the request because it contained invalid data",
                "body" => $this->parseToString($validator->errorInfo()),
            ]);

            // Save the input
            $this->services->session->push("formData", $post);
            header("Location:" . Url::make("contact"));
            exit;
        }

        $post["messageHTML"] = Markdown::text($post["message"]);

        if ($this->sendMail($post)) {
            $status = [
                "status" => "success",
                "title" => "Success",
                "body" => "The email was successfully sent.",
            ];
        } else {
            $this->services->logger->alert("Tried to send email but failed.", $post);
            $status = [
                "status" => "danger",
                "title" => "The request couldn't be completed",
                "body" => "I'm sorry about but an unexpected error occurred and the request has been aborted.",
                "footer" => "If you want to report this problem to me, that would be appreciated.<br>"
                    . "<a href='mailto:{$this->settings["mail"]["maintainer"]}'>{$this->settings["mail"]["maintainer"]}</a>",
            ];
        }

        $this->services->session->push("flash", $status);
        header("Location:" . Url::make("contact"));
        exit;
    }


    /**
     * Helper function that will fetch the weather.
     *
     * @param GeoLocation $loc
     *
     * @return OpenWeatherMap\CurrentWeather
     */
    private function getCurrentWeather(GeoLocation $loc)
    {
        $weatherCfg = $this->settings["weather"];
        $weather = new Weather(
            $weatherCfg["appid"],
            $weatherCfg["unit"],
            $weatherCfg["lang"]
        );

        $result = $weather->getCurrentWeather($loc);

        if (is_string($result)) {
            $this->services->logger->notice("Failed to fetch the weather information", [
                "errorMessage" => $result,
                "ip" => $_SERVER["REMOTE_ADDR"],
                "geoLoc" => $loc->getLocation(),
            ]);
            $result = null;
        }

        return $result;
    }


    /**
     * Will parse the error from validator to a readable string.
     *
     * @param array $errorInfo
     *
     * @return string
     */
    private function parseToString(array $errorInfo)
    {
        $result = "";

        foreach ($errorInfo as $field) {
            foreach ($field as $error) {
                $result .= $error . ".<br>";
            }
        }

        return $result;
    }


    /**
     * Sends an email
     *
     * @param array $contents
     *
     * @return bool
     */
    private function sendMail(array $contents)
    {
        $settings = $this->settings["mail"];
        $mailer = new \PHPMailer;

        $mailer->isSMTP();
        $mailer->isHTML();
        $mailer->CharSet = "UTF-8";

        $mailer->SMTPAuth = true;
        $mailer->Host = $settings["host"]["name"];
        $mailer->Port = $settings["host"]["port"];
        $mailer->SMTPSecure = $settings["host"]["secure"];

        $mailer->Username = $settings["email"];
        $mailer->Password = $settings["pass"];

        $mailer->setFrom($settings["email"], $settings["name"]);

        $mailer->addAddress(
            $settings["receiver"]["email"],
            $settings["receiver"]["name"]
        );

        // Add the senders information in the email.
        $footer = "---------------------------\n"
            . "From: " . $contents["name"] . "\n\n"
            . "Email: " . $contents["email"] . "\n";

        $mailer->Subject = $contents["subject"];
        $mailer->Body = $contents["messageHTML"] . Markdown::text($footer);
        $mailer->AltBody = $contents["message"] . $footer;

        return $mailer->send();
    }
}

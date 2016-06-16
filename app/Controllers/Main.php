<?php

namespace Controllers;

use Cmfcmf\OpenWeatherMap;
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
        $geoLoc = new GeoLocation(12.83, 55.87);
        //$geoLoc->getFromIp($_SERVER["REMOTE_ADDR"]);
        $weather = $this->getCurrentWeather($geoLoc);

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
            "main" => View::make("widgets.Main.text")->with(compact("content")),
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
        var_dump($this->sendMail($post));
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

        return $weather->getCurrentWeather($loc);
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

        // Debug
        echo "<pre>";
        $mailer->SMTPDebug = 2;

        $mailer->isSMTP();
        $mailer->isHTML();

        $mailer->SMTPAuth = true;
        $mailer->Host = $settings["host"]["name"];
        $mailer->Port = $settings["host"]["port"];
        $mailer->SMTPSecure = $settings["host"]["secure"];

        $mailer->Username = $settings["email"];
        $mailer->Password = $settings["pass"];

        $mailer->setFrom($settings["email"], $settings["name"]);
        $mailer->addAddress($contents["email"], $contents["name"]);

        $mailer->Subject = $contents["subject"];
        $mailer->Body = $contents["messageHTML"];
        $mailer->AltBody = $contents["message"];

        return $mailer->send();
    }
}

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
        return $this->theme->with([
            "title" => "Contact",
            "main" => View::make("widgets.contact-form"),
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

        $validator = new Validator();
        $validator->check($post, [
            "name" => [
                "required" => true,
                "minlength" => 5,
            ],

            "email" => [
                "required" => true,
                "email" => true,
            ],

            "subject" => [
                "required" => true,
                "minlength" => 5,
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
            header("Location:" . Url::make("contact"));
            exit;
        }

        var_dump(true);
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
}

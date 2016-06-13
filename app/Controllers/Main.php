<?php

namespace Controllers;

use Cmfcmf\OpenWeatherMap;
use DS\Utilities\GeoLocation;
use DS\Utilities\Markdown;
use DS\Weather\Weather;
use Honth\FileHandler\Path;
use Honth\Renderer\View;

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
        $weather = $this->getCurrentWeather($geoLoc);

        $feature = Markdown::file(Path::make(["app", "Resources", "Content"], "welcome.md"));

        $this->theme->with([
            "feature" => View::make("Widgets.jumbotron")->with(["content" => $feature]),
            "main" => View::make("Widgets.Main.standard", [
                "content" => View::make("Widgets.weather", compact("weather")),
            ]),
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
            "main" => View::make("Widgets.Main.text")->with(compact("content")),
        ]);

        return $this->theme->render();
    }


    /**
     * Service Page
     */
    public function service()
    {
        return $this->theme->with([
            "flash" => [
                "status" => "info",
                "title" => "<span class='glyphicon glyphicon-wrench'></span> Under Development",
                "body" => "This page is still under development.",
            ]
        ])->render();
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

        $this->services->logger->info("Fetching the weather information");

        return $weather->getCurrentWeather($loc);
    }
}

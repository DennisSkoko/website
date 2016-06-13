<?php

namespace DS\Weather;

use Cmfcmf\OpenWeatherMap;
use DS\Utilities\GeoLocation;

/**
 * Class Weather
 *
 * Uses the OpenWeatherMap API to get the current weather.
 *
 * @package DS\Weather
 * @author  Dennis Skoko
 */
class Weather
{
    /**
     * @var OpenWeatherMap
     */
    protected $owm;

    /**
     * @var string
     */
    protected $unit;

    /**
     * @var string
     */
    protected $land;


    /**
     * Weather constructor.
     *
     * @param string $appid
     * @param string $unit
     * @param string $lang
     */
    public function __construct($appid, $unit = "imerial", $lang = "en")
    {
        $this->owm = new OpenWeatherMap($appid);
        $this->unit = $unit;
        $this->lang = $lang;
    }


    /**
     * @return OpenWeatherMap\CurrentWeather
     */
    public function getCurrentWeather(GeoLocation $location)
    {
        try {
            return $this->owm->getWeather([
                "lon" => $location->getLongitude(),
                "lat" => $location->getLatitude(),
            ], $this->unit, $this->lang);
        } catch (\Exception $e) {
            return null;
        }
    }
}

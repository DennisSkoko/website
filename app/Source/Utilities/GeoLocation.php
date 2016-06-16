<?php

namespace DS\Utilities;

use DS\IP\IpInfo;

/**
 * Class GeoLocation
 *
 * A class that represents a location with longitude and latitude.
 *
 * @package DS\Utilities
 * @author  Dennis Skoko
 */
class GeoLocation
{
    /**
     * @var float
     */
    protected $latitude;

    /**
     * @var float
     */
    protected $longitude;


    /**
     * GeoLocation constructor.
     *
     * @param float $latitude
     * @param float $longitude
     */
    public function __construct($latitude = null, $longitude = null)
    {
        $this->setLatitude($latitude);
        $this->setLongitude($longitude);
    }


    /**
     * Set both the latitude and longitude, separated with a comma.
     *
     * @param string $location
     *
     * @return $this
     */
    public function setLocation($location)
    {
        $location = explode(",", $location);

        $this->setLatitude($location[0]);
        $this->setLongitude($location[1]);

        return $this;
    }


    /**
     * Return the location as a string, separated by a comma.
     *
     * @return string
     */
    public function getLocation()
    {
        return $this->latitude . "," . $this->longitude;
    }


    /**
     * @return float
     */
    public function getLatitude()
    {
        return $this->latitude;
    }


    /**
     * @param float $latitude
     *
     * @return $this
     */
    public function setLatitude($latitude)
    {
        $this->latitude = $latitude;

        return $this;
    }


    /**
     * @return float
     */
    public function getLongitude()
    {
        return $this->longitude;
    }


    /**
     * @param float $longitude
     *
     * @return $this
     */
    public function setLongitude($longitude)
    {
        $this->longitude = $longitude;

        return $this;
    }


    /**
     * Return the location as a string, separated by a comma.
     *
     * @return string
     */
    public function __toString()
    {
        return $this->getLocation();
    }


    /**
     * Creates an instance of a Geo Location
     *
     * @param float $longitude
     * @param float $latitude
     *
     * @return GeoLocation
     */
    public static function make($longitude = null, $latitude = null)
    {
        return new GeoLocation($longitude, $latitude);
    }
}

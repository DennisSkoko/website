<?php

namespace DS\Utilities;

use DS\IP\IpInfo;

/**
 * Class GeoLocation
 *
 * Description
 *
 * @package DS\Utilities
 * @author  Dennis Skoko
 */
class GeoLocation
{
    /**
     * @var float
     */
    protected $longitude;

    /**
     * @var float
     */
    protected $latitude;


    /**
     * GeoLocation constructor.
     *
     * @param float $longitude
     * @param float $latitude
     */
    public function __construct($longitude = null, $latitude = null)
    {
        $this->setLongitude($longitude);
        $this->setLatitude($latitude);
    }


    /**
     * Fetches the location from an ip address.
     *
     * @param string $ip
     *
     * @return $this
     */
    public function getFromIp($ip)
    {
        $location = IpInfo::getInfoFrom($ip)["loc"];
        $this->setLocation($location);

        return $this;
    }


    /**
     * Set both the longitude and latitude, separated with a comma.
     *
     * @param string $location
     *
     * @return $this
     */
    public function setLocation($location)
    {
        $location = explode(",", $location);

        $this->setLongitude($location[0]);
        $this->setLatitude($location[1]);

        return $this;
    }


    /**
     * Return the location as a string, separated by a comma.
     *
     * @return string
     */
    public function getLocation()
    {
        return $this->longitude . "," . $this->latitude;
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
     * Return the location as a string, separated by a comma.
     *
     * @return string
     */
    public function __toString()
    {
        return $this->getLocation();
    }
}

<?php

namespace DS\IP;

/**
 * Class IpInfo
 *
 * A simple API for fetching
 *
 * @link http://ipinfo.io/
 *
 * @package DS\IP
 * @author  Dennis Skoko
 */
class IpInfo
{
    /**
     * @var string - What value that will be fetched from ipinfo.io.
     */
    protected $request;

    /**
     * @var string
     */
    protected $ip;

    /**
     * @var string
     */
    protected $hostname;

    /**
     * @var string
     */
    protected $city;

    /**
     * @var string
     */
    protected $region;

    /**
     * @var string
     */
    protected $country;

    /**
     * @var string
     */
    protected $loc;

    /**
     * @var string
     */
    protected $org;

    /**
     * @var string
     */
    protected $postal;

    /**
     * var int
     */
    protected $bogon;


    /**
     * IpInfo constructor.
     *
     * @param string $request = The information that will be fetched.
     * @param string|array $values - Will take an array of default values.
     */
    public function __construct($request, array $values = null)
    {
        $this->request = $request;

        if ($values !== null) {
            $this->assign($values);
        }
    }


    /**
     * @return string
     */
    public function getIp()
    {
        return $this->ip;
    }


    /**
     * @return string
     */
    public function getHostname()
    {
        return $this->hostname;
    }


    /**
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }


    /**
     * @return string
     */
    public function getRegion()
    {
        return $this->region;
    }


    /**
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }


    /**
     * @return string
     */
    public function getLoc()
    {
        return $this->loc;
    }


    /**
     * @return string
     */
    public function getOrg()
    {
        return $this->org;
    }


    /**
     * @return string
     */
    public function getPostal()
    {
        return $this->postal;
    }


    /**
     * $return bool
     */
    public function isBogon()
    {
        return $this->bogon === 1;
    }


    /**
     * Will send a request to ipinfo.io and fetch the values and assign them to the class
     *
     * @param $ip
     *
     * @return $this
     */
    public function from($ip)
    {
        if (filter_var($ip, FILTER_VALIDATE_IP) === false) {
            throw new \InvalidArgumentException(__METHOD__ . ": First parameter must be a valid IP.");
        }

        $result = file_get_contents("http://ipinfo.io/$ip/{$this->request}");

        if ($result == "undefined") {
            throw new \LogicException(__METHOD__ . ": A request was made to ipinfo.io but {$this->request} is undefined");
        }

        $json = json_decode($result, true);
        $this->assign($json != JSON_ERROR_NONE ? $json : [$this->request => $result]);

        return $this;
    }


    /**
     * Will assign the values to this object
     *
     * @param array $values
     */
    protected function assign(array $values)
    {
        foreach ($values as $key => $value) {
            if (property_exists($this, $key) && $key !== "request") {
                $value = trim($value);
                if ($value !== "undefined") {
                    $this->$key = $value;
                }
            } else {
                throw new \LogicException(__METHOD__ . ": Unknown key: $key");
            }
        }
    }


    /**
     * Will create an IpInfo class with the given request.
     *
     * @param string $request = The information that will be fetched.
     *
     * @return IpInfo
     */
    public static function fetch($request)
    {
        return new IpInfo($request);
    }


    /**
     * Will create an IpInfo class that is ready to fetch all values.
     *
     * @return IpInfo
     */
    public static function all()
    {
        return new IpInfo("json");
    }
}

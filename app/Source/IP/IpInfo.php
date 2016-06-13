<?php

namespace DS\IP;

/**
 * Class IpInfo
 *
 * Will receive a ip and send a request to ipinfo.io and return the results.
 *
 * @link http://ipinfo.io/
 *
 * @package DS\IP
 * @author  Dennis Skoko
 */
class IpInfo
{
    public static function getInfoFrom($ip)
    {
        if (!filter_var($ip, FILTER_VALIDATE_IP) === false) {
            return json_decode(file_get_contents("http://ipinfo.io/$ip/json"), true);
        } else {
            throw new \Exception(__METHOD__ . ": Must be a valid IP address.");
        }
    }   
}

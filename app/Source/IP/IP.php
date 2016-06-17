<?php

namespace DS\IP;

/**
 * Class IP
 *
 * @package DS\IP
 * @author  Dennis Skoko
 */
class IP
{
    /**
     * Will get the IP address. If it is 192.168.1.1 then will call ipinfo to get the real ip address.
     *
     * @return string
     */
    public static function get()
    {
        $ip = $_SERVER["REMOTE_ADDR"];

        if ($ip == "192.168.1.1") {
            $ip = trim(file_get_contents("http://ipinfo.io/ip"));
        }

        return $ip;
    }
}

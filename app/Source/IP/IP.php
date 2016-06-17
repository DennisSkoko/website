<?php

namespace DS\IP;

/**
 * Class IP
 *
 * Used to get the IP address.
 *
 * @package DS\IP
 * @author  Dennis Skoko
 */
class IP
{
    /**
     * Will get the IP address. If it is false IP then will call ipinfo to get the real ip address.
     *
     * @return string
     */
    public static function get()
    {
        $falseIPs = [
            "192.168.1.1",
            "127.0.0.1",
            "::1"
        ];

        $ip = $_SERVER["REMOTE_ADDR"];

        if (in_array($ip, $falseIPs)) {
            $ip = trim(file_get_contents("http://ipinfo.io/ip"));
        }

        return $ip;
    }
}

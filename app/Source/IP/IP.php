<?php

namespace DS\IP;

/**
 * Class IP
 *
 * Will do it's best to fetch the clients IP but if I can't then respect the user.
 *
 * Source:
 * @link https://gist.github.com/cballou/2201933
 *
 * @package DS\IP
 * @author  Dennis Skoko
 */
class IP
{
    /**
     * Will do it's best to fetch the client's IP address.
     *
     * @return bool|string
     */
    public static function get()
    {
        $ip_keys = [
            'HTTP_CLIENT_IP',
            'HTTP_X_FORWARDED_FOR',
            'HTTP_X_FORWARDED',
            'HTTP_X_CLUSTER_CLIENT_IP',
            'HTTP_FORWARDED_FOR',
            'HTTP_FORWARDED',
            'REMOTE_ADDR',
        ];

        foreach ($ip_keys as $key) {
            if (array_key_exists($key, $_SERVER) === true) {
                foreach (explode(',', $_SERVER[$key]) as $ip) {
                    // trim for safety measures
                    $ip = trim($ip);
                    // attempt to validate IP
                    if (self::validate($ip)) {
                        return $ip;
                    }
                }
            }
        }

        return isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : false;
    }


    /**
     * Will validate an IP address
     *
     * @param $ip
     *
     * @return bool
     */
    public static function validate($ip)
    {
        $options = FILTER_FLAG_IPV4 | FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE;

        if (filter_var($ip, FILTER_VALIDATE_IP, $options) === false) {
            return false;
        }

        return true;
    }
}

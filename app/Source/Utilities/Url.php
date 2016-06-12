<?php

namespace DS\Utilities;

/**
 * Class Url
 *
 * Will aid your app when creating urls.
 *
 * @package DS\Utilities
 * @author  Dennis Skoko
 */
class Url
{
    /**
     * @var string - The path to the webroot.
     */
    protected static $pathToWebroot = "/";


    /**
     * @param string $path
     */
    public static function setPathToWebroot($path)
    {
        self::$pathToWebroot = $path;
    }


    /**
     * @param string $url
     *
     * @return string
     */
    public static function make($url)
    {
        $append = $url;

        if ($url == "/") {
            $append = "";
        }

        return self::$pathToWebroot . $append;
    }
}

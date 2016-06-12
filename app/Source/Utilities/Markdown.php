<?php

namespace DS\Utilities;

use Honth\FileHandler\Fileloader;
use Honth\FileHandler\Filesystem;

/**
 * Class Markdown
 *
 * Description
 *
 * @package DS\Utilities
 * @author  Dennis Skoko
 */
class Markdown
{
    /**
     * @var \Parsedown $parser
     */
    protected static $parser;


    /**
     * Will convert the given string into markdown string and return it.
     *
     * @param $text
     *
     * @return string
     */
    public static function text($text)
    {
        if (empty(self::$parser)) {
            self::$parser = new \Parsedown;
        }

        return self::$parser->text($text);
    }


    /**
     * Will fetch the contents from a file, parse it and return the result.
     *
     * @param $path
     *
     * @return string
     */
    public static function file($path)
    {
        if (empty(self::$parser)) {
            self::$parser = new \Parsedown;
        }

        $text = Filesystem::read($path);

        return self::$parser->text($text);
    }
}

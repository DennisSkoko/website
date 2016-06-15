<?php

namespace DS\Storage;

use Honth\FileHandler\Fileloader;
use Honth\FileHandler\Path;
use Honth\Utilities\Container\ArrayManager;

/**
 * Class Session
 *
 * @package DS\Storage
 * @author  Dennis Skoko
 */
class Session extends ArrayManager
{
    public function __construct()
    {
        Fileloader::load(Path::make(["app"], "session.php"));
        parent::__construct($_SESSION);
    }
}

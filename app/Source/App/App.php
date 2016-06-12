<?php

namespace DS\App;

use Honth\FileHandler\Fileloader;
use Honth\Log\Logger;

/**
 * {@inheritdoc]
 *
 * @property-read Logger $logger
 */
class App extends \Slim\App
{
    /**
     * App constructor.
     *
     * @param array|\Interop\Container\ContainerInterface $container
     */
    public function __construct($container)
    {
        parent::__construct($container);
    }


    /**
     * Will inport the file with the app available in the file.
     *
     * @param $file
     */
    public function import($file)
    {
        Fileloader::load($file, ["app" => $this]);
    }
}

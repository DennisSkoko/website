<?php

namespace DS\App;

use Honth\FileHandler\Path;
use Honth\Log\Logger;
use Interop\Container\ContainerInterface;
use Psr\Log\LogLevel;

/**
 * Class DefaultAppServices
 *
 * Created the default values for the app.
 *
 * @package DS\App
 * @author  Dennis Skoko
 */
class DefaultAppServices
{
    /**
     * Registers the default values.
     *
     * - Logger
     */
    public function register(ContainerInterface $container)
    {
        if (!isset($container["logger"])) {
            $container["logger"] = function () {
                return new Logger([
                    "name" => "App",
                    "directory" => Path::make(["bin", "log"]),
                    "minLevel" => LogLevel::DEBUG,
                ]);
            };
        }
    }
}

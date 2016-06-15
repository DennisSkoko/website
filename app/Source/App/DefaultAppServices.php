<?php

namespace DS\App;

use DS\Storage\Session;
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
     * - Logger  logger
     * - Session session
     *
     * @param ContainerInterface $container
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

        if (!isset($container["session"])) {
            $container["session"] = function () {
                return new Session();
            };
        }
    }
}

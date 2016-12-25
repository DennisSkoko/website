<?php
/**
 * Create an instance of the application and sends the request to it.
 */

use DS\Providers\AppServices;
use DS\Utilities\Path;
use \DS\Container;
use Symfony\Component\Console\Application;

require 'src/bootstrap.php';

$container = new Container(['settings' => $config]);
$container
    ->register(new AppServices())
    ->setAsGlobal();

$app = new Application('Website', VERSION);
$app->addCommands(require Path::make(['config'], 'commands.php'));

$app->run();

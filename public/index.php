<?php
/**
 * Creates an instance of the application and sends the request to it.
 */

use DS\Container;
use DS\Providers\AppServices;
use DS\Utilities\Path;
use Slim\App;

require '../src/bootstrap.php';

$container = new Container(['settings' => $config]);
$container
    ->register(new AppServices())
    ->setAsGlobal();

$app = new App($container);

require Path::make(['src'], 'routes.php');

$app->run();
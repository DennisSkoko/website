<?php

use Honth\FileHandler\Fileloader;

require __DIR__ . "/../vendor/autoload.php";
require __DIR__ . "/../app/bootstrap.php";

$config = Fileloader::get(path(["app", "Config"], "app.php"));

$container = new \DS\App\Container($config);
$app = new DS\App\App($container);

$app->import(path(["app", "Config"], "routes.php"));

$app->run();

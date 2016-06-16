<?php

use Honth\FileHandler\Fileloader;
use Honth\Utilities\Util;

require __DIR__ . "/../vendor/autoload.php";
require __DIR__ . "/../app/bootstrap.php";

$config = Fileloader::get(path(["app", "Config"], "app.php"));
Util::push($config, Fileloader::get(path(["app", "Config"], "weather.php")), "settings");
Util::push($config, Fileloader::get(path(["app", "Config"], "session.php")), "settings");
Util::push($config, Fileloader::get(path(["app", "Config"], "mail.php")), "settings");

$container = new \DS\App\Container($config);
$app = new DS\App\App($container);

$app->import(path(["app", "Config"], "routes.php"));

$app->run();

<?php

use Honth\Utilities\Dispatcher;

$app->get("/", Dispatcher::make([\Controllers\Main::class, "home"]));
$app->get("/about", Dispatcher::make([\Controllers\Main::class, "about"]));
$app->get("/service", Dispatcher::make([\Controllers\Main::class, "service"]));

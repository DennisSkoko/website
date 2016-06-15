<?php

use Controllers\Main;
use Controllers\Service;
use Honth\Utilities\Dispatcher;

$app->get("/",        Dispatcher::make([Main::class, "home"]));
$app->get("/about",   Dispatcher::make([Main::class, "about"]));
$app->get("/service", Dispatcher::make([Service::class, "all"]));
$app->get("/contact", Dispatcher::make([Main::class, "contact"]));

<?php

use Controllers\Main;
use Controllers\Service;
use Honth\Utilities\Dispatcher;

$app->get("/",        Dispatcher::make([Main::class, "home"]));
$app->get("/about",   Dispatcher::make([Main::class, "about"]));
$app->get("/contact", Dispatcher::make([Main::class, "contact"]));

$app->get("/service", Dispatcher::make([Service::class, "all"]));
$app->get("/service/weather", Dispatcher::make([Service::class, "weather"]));
$app->get("/service/ipinfo", Dispatcher::make([Service::class, "ipinfo"]));
$app->get("/service/calendar", Dispatcher::make([Service::class, "calendar"]));

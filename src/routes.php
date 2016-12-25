<?php
/**
 * Defines routes for the application.
 */

use DS\Controllers\Main;

/*
 * Middleware
 */
$app->add($container->csrf);


/*
 * Main
 */
$app->get('/', Main::class . ':welcome');
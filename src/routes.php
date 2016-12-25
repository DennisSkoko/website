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
$app->get('/', Main::class . ':home')
    ->setName('home');

$app->get('/about', Main::class . ':home')
    ->setName('about');

$app->get('/contact', Main::class . ':home')
    ->setName('contact');
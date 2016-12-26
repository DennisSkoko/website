<?php
/**
 * Defines routes for the application.
 */

use DS\Controllers\Contact;
use DS\Controllers\Main;

/*
 * Middleware
 */
$app->add($container->csrf);


/*
 * Home
 */
$app->get('/', Main::class . ':home')
    ->setName('home');

/*
 * Contact
 */
$app->get('/contact', Contact::class . ':form')
    ->setName('contact');

$app->post('/contact', Contact::class . ':process')
    ->setName('contact-process');
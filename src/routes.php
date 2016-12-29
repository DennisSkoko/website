<?php
/**
 * Defines routes for the application.
 */

use DS\Controllers\Contact;
use DS\Controllers\Main;
use DS\Controllers\Projects;

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
 * Projects
 */
$app->get('/projects', Projects::class . ':all')
    ->setName('projects');

/*
 * Contact
 */
$app->get('/contact', Contact::class . ':form')
    ->setName('contact');

$app->post('/contact', Contact::class . ':process')
    ->setName('contact-process');
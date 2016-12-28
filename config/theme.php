<?php
/**
 * Configuration for the theme.
 *
 * @var \DS\Container $c
 */

return [

    'file' => 'layout.default',
    'basePath' => $c['request']->getUri()->getBasePath() . '/',

    'lang' => 'sv',
    'charset' => 'utf-8',
    'mainTitle' => 'Dennis Skoko',

    'meta' => [
        'viewport' => 'width=device-width, initial-scale=1',
    ],

    'stylesheets' => [
        'style/css/bootstrap.css',
        'style/css/main.css'
    ],

    'javascript' => [
        'js/jquery.js',
        'js/bootstrap.js'
    ],

    'navbar' => [
        'brand' => [
            'text' => 'Dennis Skoko',
            'url' => '/'
        ],

        'links' => [
            'Contact' => 'contact'
        ],
    ],

];

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
        'style/css/normalize.css',
        'style/css/bootstrap.css'
    ],

    'javascript' => [

    ],

    'navbar' => [
        'brand' => [
            'text' => 'Dennis Skoko',
            'url' => '/'
        ],

        'links' => [
            'About' => 'about',
            'Contact' => 'contact'
        ],
    ],

];

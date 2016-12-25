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
    'mainTitle' => 'Application',

    'meta' => [
        'viewport' => 'width=device-width, initial-scale=1',
    ],

    'stylesheets' => [
        'style/css/style.css'
    ],

    'javascript' => [

    ],

    'navbar' => [
        'links' => [

        ],
    ],

];

<?php
/**
 * Configuration for the application.
 */

use DS\Utilities\Path;

return [

    'displayErrorDetails' => true,
    //'routerCacheFile' => Path::make(['bin', 'cache'], 'router.php'),

    'contact' => [
        'name' => 'Dennis Skoko',
        'email' => 'dennis.skoko@hotmail.com'
    ],

    'view' => [
        'directory' => Path::make(['res', 'views'])
    ],

    'logger' => [
        'name' => 'App',
        'filename' => Path::make(['bin', 'logs'], 'app.log'),
        'minLevel' => $env['logger']['level'],
        'maxFiles' => 30
    ],

    'session' => [
        'name' => 'session_id'
    ],

    'csrf' => [
        'name' => 'csrf'
    ],

    'theme' => [
        'file' => Path::make(['config'], 'theme.php')
    ],

    'mailer' => [
        'user' => $env['mailer']['user'],
        'pass' => $env['mailer']['pass'],

        'charset' => 'utf8',
        'debug' => false,

        'from' => [
            'name' => 'Dennis Skoko',
            'email' => $env['mailer']['user'],
        ],

        'transport' => [
            'host' => $env['mailer']['host'],
            'port' => $env['mailer']['port'],
            'security' => $env['mailer']['security'],
        ],
    ],


    'less-compiler' => [
        'input' => Path::make(['res', 'assets', 'less']),
        'output' => Path::make(['public', 'css'])
    ]

];

<?php
/**
 * Configuration for the application.
 */

use DS\Utilities\Path;

return [

    'displayErrorDetails' => true,
    //'routerCacheFile' => Path::make(['bin', 'cache'], 'router.php'),

    'view' => [
        'directory' => Path::make(['res', 'views'])
    ],

    'logger' => [
        'name' => 'App',
        'filename' => Path::make(['bin', 'log'], 'app.log'),
        'minLevel' => \Psr\Log\LogLevel::INFO,
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
            'name' => 'Mens Shoppen',
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

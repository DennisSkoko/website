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


    'less-compiler' => [
        'input' => Path::make(['res', 'assets', 'less']),
        'output' => Path::make(['public', 'css'])
    ]

];

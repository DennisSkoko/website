<?php
/**
 * This config file specifies the Open Graph protocol so the app is more social friendly.
 *
 * For more info:
 * @link http://ogp.me/
 */

return [

    "og" => [

        "title" => "Dennis Skoko",

        "type" => "Website",

        "image" => \DS\Utilities\Url::make("img/avatar.jpg"),

        // The current URL
        "url" => $_SERVER["HTTP_HOST"] . explode("?", $_SERVER["REQUEST_URI"])[0],

    ],

];

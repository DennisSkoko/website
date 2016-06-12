<?php

use DS\Utilities\Url;

return [

    "navbar" => [

        "header" => "Dennis Skoko",

        "links" => [

            [
                "text" => "Home",
                "url" => Url::make("/"),
            ],

            [
                "text" => "About",
                "url" => Url::make("about"),
            ],

        ]

    ]

];

<?php

use DS\Utilities\Url;
use Honth\FileHandler\Fileloader;
use Honth\FileHandler\Path;
use Honth\Renderer\View;

Path::setProjectRoot(__DIR__ . "/..");
View::setPathToViews(Path::make(["app", "Resources", "Views"]));
Url::setPathToWebroot("/DennisSkoko/public/");

Fileloader::load(Path::make(["app"], "aliases.php"));

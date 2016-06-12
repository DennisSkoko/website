<?php

namespace Controllers;

use DS\Utilities\Markdown;
use Honth\FileHandler\Fileloader;
use Honth\FileHandler\Path;
use Honth\Renderer\View;

/**
 * Class Main
 *
 * The Main controller for the app
 *
 * @package Controllers
 * @author  Dennis Skoko
 */
class Main extends Controller
{
    /**
     * Home Page
     */
    public function home()
    {
        $content = Markdown::file(Path::make(["app", "Resources", "Content"], "welcome.md"));

        return $this->getLayoutWith(View::make("Widgets.jumbotron")->with(compact("content")))
            ->render();
    }


    /**
     * About Page
     */
    public function about()
    {
        $content = Markdown::file(Path::make(["app", "Resources", "Content"], "about.md"));

        return $this->getLayoutWith(View::make("Widgets.content")->with(compact("content")))->render();
    }
}

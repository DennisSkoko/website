<?php

namespace Controllers;

use DS\App\Container;
use Honth\FileHandler\Fileloader;
use Honth\FileHandler\Path;
use Honth\Renderer\View;
use Honth\Utilities\Util;

/**
 * Class Controller
 *
 * @package Controllers
 * @author  Dennis Skoko
 */
class Controller
{
    /**
     * @var Container
     */
    protected $services;

    /**
     * @var View - A view that contains the layout for the page.
     */
    protected $theme;

    /**
     * Controller constructor.
     */
    public function __construct()
    {
        global $app;
        $this->services = $app->getContainer();

        $this->loadTheme();
    }


    /**
     * Receives a view that will be added into a layout.
     *
     * @param string|View $view
     *
     * @return View
     */
    protected function getLayoutWith($view)
    {
        return $this->theme->with(["main" => $view]);
    }


    protected function loadTheme()
    {
        $layout = Fileloader::get(Path::make(["app", "Config"], "layout.php"));

        Util::push($layout, Fileloader::get(Path::make(["app", "Config"], "navbar.php")));

        $layoutView = Util::pull($layout, "view");
        $this->theme = View::make($layoutView)->with($layout);
    }
}

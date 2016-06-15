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
     * @var array
     */
    protected $settings;

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
        $this->settings = $this->services->get("settings");

        $this->loadTheme();
        $this->loadFlashMsg();
    }


    /**
     * Initializes the theme for the app.
     */
    protected function loadTheme()
    {
        $layout = Fileloader::get(Path::make(["app", "Config"], "layout.php"));

        Util::push($layout, Fileloader::get(Path::make(["app", "Config"], "navbar.php")));

        $layoutView = Util::pull($layout, "view");
        $this->theme = View::make($layoutView)->with($layout);
    }


    /**
     * Loads a flash message from the session, removes it from the session and displays it
     */
    protected function loadFlashMsg()
    {
        if ($this->services->session->exists("flash")) {
            $flash = $this->services->session->pull("flash");
            $this->theme->with(compact("flash"));
        }
    }
}

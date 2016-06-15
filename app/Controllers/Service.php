<?php

namespace Controllers;

use Honth\Renderer\View;

/**
 * Class Service
 *
 * Controller for handling the available services.
 *
 * @package Controllers
 * @author  Dennis Skoko
 */
class Service extends Controller
{
    public function all()
    {
        $this->theme->set("stylesheets", ["style/less/services.less"]);
        $this->theme->set("javascript", ["js/less.js"]);

        return $this->theme->with([
            "title" => "Services",
            "main" => View::make("pages.services"),
        ])->render();
    }


    /**
     * Weather
     */
    public function weather()
    {
        return $this->dev();
    }


    /**
     * IP Info
     */
    public function ipinfo()
    {
        return $this->dev();
    }


    /**
     * Calendar
     */
    public function calendar()
    {
        return $this->dev();
    }


    private function dev()
    {
        return $this->theme->with([
            "flash" => [
                "status" => "info",
                "title" => "<span class='glyphicon glyphicon-wrench'></span> Under Development",
                "body" => "This page is under development."
            ]
        ])->render();
    }
}

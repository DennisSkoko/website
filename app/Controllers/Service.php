<?php

namespace Controllers;

use DS\IP\IpInfo;
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
        $this->theme->set("stylesheets", ["style/css/services.css"]);

        return $this->theme->with([
            "title" => "Services",
            "main" => View::make("pages.services"),
        ])->render();
    }


    /**
     * IP Info
     */
    public function ipinfo()
    {
        $ipinfo = IpInfo::all()->from($_SERVER["REMOTE_ADDR"]);

        return $this->theme->with([
            "title" => "IP Info",
            "main" => View::make("widgets.main.standard", [
                "content" => View::make("widgets.ipinfo", compact("ipinfo")),
            ]),
        ])->render();
    }


    /**
     * Calendar
     */
    public function calendar()
    {
        return $this->dev()->render();
    }


    /**
     * @return View
     */
    private function dev()
    {
        return $this->theme->with([
            "flash" => [
                "status" => "info",
                "title" => "<span class='glyphicon glyphicon-wrench'></span> Under Development",
                "body" => "This page is under development."
            ]
        ]);
    }
}

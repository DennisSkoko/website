<?php

namespace Controllers;

use DS\Calendar\Calendar;
use DS\IP\IP;
use DS\IP\IpInfo;
use Honth\Renderer\View;
use Honth\Validation\Validator;
use Slim\Http\Request;

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
        $ipinfo = IpInfo::all()->from(IP::get());

        $this->theme->set("meta.keywords", ["IP", "Whats my IP"]);

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
    public function calendar(Request $request)
    {
        $date = explode("-", $request->getAttribute("date"));
        $year = null;
        $month = null;

        if (count($date) == 2 && ctype_digit($date[0]) && ctype_digit($date[1])) {
            // Clean the month from any leading zeros
            $date[1] = ltrim($date[1], '0');

            $validator = new Validator;

            $validator->check($date, [
                0 => [
                    "min" => 1970,
                    "max" => 2037,
                ],

                1 => [
                    "min" => 1,
                    "max" => 12,
                ]
            ]);

            if (!$validator->fails()) {
                $year = $date[0];
                $month = $date[1];
            }
        }

        $calendar = new Calendar($month, $year);

        $this->theme->set("meta.keywords", ["Calendar"]);

        return $this->theme->with([
            "title" => "Calendar",
            "main" => View::make("widgets.calendar", compact("calendar")),
        ])->render();
    }
}

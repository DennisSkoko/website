<?php

namespace DS\Calendar;

/**
 * Class Calendar
 *
 * This class fetches the time information from PHP and
 * allows you to get enough information to build a calendar in HTML.
 *
 * @package DS\Calendar
 * @author  Dennis Skoko
 */
class Calendar
{
    /**
     * @var int
     */
    protected $year;

    /**
     * @var int
     */
    protected $month;

    /**
     * @var Week[]
     */
    protected $weeks;


    /**
     * Calendar constructor.
     *
     * @param $month
     * @param $year
     */
    public function __construct($month = null, $year = null)
    {
        $this->month = (int)date("n");
        $this->year = (int)date("Y");
        $this->weeks = [];

        $this->setWeeks();
    }


    /**
     * @return int
     */
    public function getYear()
    {
        return $this->year;
    }


    /**
     * @return int
     */
    public function getMonth()
    {
        return $this->month;
    }


    /**
     * @return Week[]
     */
    public function getWeeks()
    {
        return $this->weeks;
    }


    /**
     * This function will populate the weeks property
     */
    protected function setWeeks()
    {
        // Get the first day of the month in Unix time
        $day = strtotime(date($this->year . "-" . $this->month . "-01"));

        // Convert to first day of the first week of the month in Unix time.
        $day = strtotime("this week", $day);

        for ($i = 0; $i < 6; $i++) {
            $this->weeks[] = new Week($day, $this->month);
            $day = strtotime("+1 week", $day);
        }
    }
}

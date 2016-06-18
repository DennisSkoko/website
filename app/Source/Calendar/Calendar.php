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
     * @var int - The unix time of the current month and year.
     */
    protected $unix;


    /**
     * Calendar constructor.
     *
     * @param $month
     * @param $year
     */
    public function __construct($month = null, $year = null)
    {
        $this->year = $year !== null ? $year : (int)date("Y");
        $this->month = $month !== null ? $month : (int)date("n");

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
     * A text representation of the month.
     *
     * @return string
     */
    public function getMonthAsText()
    {
        return $this->format("F");
    }


    /**
     * Will format the current time with the given format.
     * If no format is given then will return the Unix time.
     *
     * @param string $format
     *
     * @return bool|int|string
     */
    public function format($format = null)
    {
        return $format !== null ? date($format, $this->unix) : $this->unix;
    }


    /**
     * This function will populate the weeks property
     */
    protected function setWeeks()
    {
        // Get the first day of the month in Unix time
        $this->unix = $day = strtotime(date($this->year . "-" . $this->month . "-01"));

        // Convert to first day of the first week of the month in Unix time.
        $day = strtotime("this week", $day);

        for ($i = 0; $i < 6; $i++) {
            $this->weeks[] = new Week($day, $this->month);
            $day = strtotime("+1 week", $day);
        }
    }
}

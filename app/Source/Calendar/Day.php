<?php

namespace DS\Calendar;

/**
 * Class Day
 *
 * Represents a day from a calendar
 *
 * @package DS\Calendar
 * @author  Dennis Skoko
 */
class Day
{
    /**
     * @var int - The unix time for the day.
     */
    protected $unix;

    /**
     * @var bool - If the day is within the month. Default is false.
     */
    protected $inMonth;


    /**
     * Day constructor.
     *
     * @param int $unix - Unix time of which day this object will represent.
     * @param int $month - Can pass in current month to check if the day is within the month.
     */
    public function __construct($unix, $month = null)
    {
        $this->unix = $unix;
        $this->inMonth = $month !== null ? date("n", $this->unix) == $month : false;
    }


    /**
     * Will return the number of the day without leading zeros.
     *
     * @return int
     */
    public function getDayNumber()
    {
        return (int)$this->format("j");
    }


    /**
     * Will return a textual representation of a day.
     *
     * @return string
     */
    public function getName()
    {
        return $this->format("l");
    }


    /**
     * Will return a textual representation of a day in three letters.
     *
     * @return string
     */
    public function getShortName()
    {
        return $this->format("D");
    }


    /**
     * Will check if the day is red.
     *
     * @return bool
     */
    public function isRed()
    {
        return $this->getShortName() == "Sun";
    }


    /**
     * A bool if the day is within the given month.
     *
     * @return bool
     */
    public function isInMonth()
    {
        return $this->inMonth;
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
}

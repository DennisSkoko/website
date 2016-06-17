<?php

namespace DS\Calendar;

/**
 * Class Week
 *
 *
 *
 * @package DS\Calendar
 * @author  Dennis Skoko
 */
class Week
{
    /**
     * @var int - The number of the week.
     */
    protected $num;

    /**
     * @var Day[]
     */
    protected $days = [];


    /**
     * Week constructor.
     *
     * This will take a unix time first day of a week.
     * It will then loop through the days and populate the week's property.
     *
     * @param int $day - First day of the week.
     * @param int $month - The current month for when deciding if the day belongs to the current month.
     */
    public function __construct($day, $month = null)
    {
        $this->num = date("W", $day);

        for ($i = 0; $i < 7; $i++) {
            $this->days[] = new Day($day, $month);
            $day = strtotime('+1 day', $day);
        }
    }


    /**
     * @return int
     */
    public function getNumber()
    {
        return $this->num;
    }


    /**
     * @return Day[]
     */
    public function getDays()
    {
        return $this->days;
    }
}

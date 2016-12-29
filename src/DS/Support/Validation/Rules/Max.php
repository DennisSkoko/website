<?php

namespace DS\Support\Validation\Rules;

use DS\Support\Validation\Rule;

/**
 * Checks if the value is less than the given number.
 */
class Max extends Rule
{
    protected $message = ':field must be a maximum of :requirement';

    protected $requirementNeeded = true;


    /**
     * {@inheritdoc}
     */
    public function check($value, $requirement, $input)
    {
        if (!(is_int($value) || is_float($value))) {
            return false;
        }

        return $value <= $requirement;
    }
}

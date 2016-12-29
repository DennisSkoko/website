<?php

namespace DS\Support\Validation\Rules;

use DS\Support\Validation\Rule;

/**
 * Checks if the value is a valid IP address.
 */
class Ip extends Rule
{
    protected $message = ':field must be a valid IP address.';


    /**
     * {@inheritdoc}
     */
    public function check($value, $requirement, $input)
    {
        return filter_var($value, FILTER_VALIDATE_IP) !== false;
    }
}

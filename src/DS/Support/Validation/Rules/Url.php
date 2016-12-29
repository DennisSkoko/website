<?php

namespace DS\Support\Validation\Rules;

use DS\Support\Validation\Rule;

/**
 * Checks if the value is a valid URL.
 */
class Url extends Rule
{
    protected $message = ':field must be a valid URL.';


    /**
     * {@inheritdoc}
     */
    public function check($value, $requirement, $input)
    {
        return filter_var($value, FILTER_VALIDATE_URL) !== false;
    }
}

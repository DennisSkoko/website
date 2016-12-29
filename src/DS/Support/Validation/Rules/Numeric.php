<?php

namespace DS\Support\Validation\Rules;

use DS\Support\Validation\Rule;

/**
 * Checks if the value is numeric
 */
class Numeric extends Rule
{
    protected $message = ':field must be numeric.';


    /**
     * {@inheritdoc}
     */
    public function check($value, $requirement, $input)
    {
        return is_numeric($value);
    }
}

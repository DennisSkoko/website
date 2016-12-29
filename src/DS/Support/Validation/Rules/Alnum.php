<?php

namespace DS\Support\Validation\Rules;

use DS\Support\Validation\Rule;

/**
 * Checks if the value contains only alphabetic character or numeric.
 */
class Alnum extends Rule
{
    protected $message = ':field must be alphanumeric.';


    /**
     * {@inheritdoc}
     */
    public function check($value, $requirement, $input)
    {
        return ctype_alnum($value);
    }
}

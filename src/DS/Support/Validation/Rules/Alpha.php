<?php

namespace DS\Support\Validation\Rules;

use DS\Support\Validation\Rule;

/**
 * Checks if the value contains only alphabetic character.
 */
class Alpha extends Rule
{
    protected $message = ':field must be alphabetic.';


    /**
     * {@inheritdoc}
     */
    public function check($value, $requirement, $input)
    {
        return ctype_alpha($value);
    }
}

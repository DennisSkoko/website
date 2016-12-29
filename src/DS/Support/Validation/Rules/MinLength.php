<?php

namespace DS\Support\Validation\Rules;

use DS\Support\Validation\Rule;

/**
 * Checks if the number of characters are greater than the given number.
 */
class MinLength extends Rule
{
    protected $message = ':field must be a minimum of :requirement characters.';

    protected $requirementNeeded = true;


    /**
     * {@inheritdoc}
     */
    public function check($value, $requirement, $input)
    {
        return strlen(trim((string)$value)) >= $requirement;
    }
}

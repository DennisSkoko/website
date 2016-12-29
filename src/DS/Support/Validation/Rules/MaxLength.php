<?php

namespace DS\Support\Validation\Rules;

use DS\Support\Validation\Rule;

/**
 * Checks if the number of characters are a less than the given number.
 */
class MaxLength extends Rule
{
    protected $message = ':field must be a maximum of :requirement characters.';

    protected $requirementNeeded = true;


    /**
     * {@inheritdoc}
     */
    public function check($value, $requirement, $input)
    {
        return strlen(trim((string)$value)) <= $requirement;
    }
}

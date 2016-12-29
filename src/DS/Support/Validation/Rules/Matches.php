<?php

namespace DS\Support\Validation\Rules;

use DS\Support\Validation\Rule;

/**
 * Checks if the value matches with another fields value.
 */
class Matches extends Rule
{
    protected $message = ':field must match :requirement.';

    protected $requirementNeeded = true;


    /**
     * {@inheritdoc}
     */
    public function check($value, $requirement, $input)
    {
        return $value === $input[$requirement];
    }
}

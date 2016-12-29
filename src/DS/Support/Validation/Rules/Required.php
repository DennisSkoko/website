<?php

namespace DS\Support\Validation\Rules;

use DS\Support\Validation\Rule;

/**
 * Check if the value is present within the data.
 */
class Required extends Rule
{
    protected $message = ':field is required';

    /**
     * {@inheritdoc}
     */
    public function check($value, $requirement, $input)
    {
        $value = trim($value);

        return !($value === null || $value === '');
    }
}

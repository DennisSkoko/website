<?php

namespace DS\Support\Validation;

abstract class Rule
{
    /**
     * @var array
     */
    protected $message = ':field is invalid.';

    /**
     * @var bool - If this rule needs the requirement field to be set in the rule map.
     */
    protected $requirementNeeded = false;


    /**
     * Rule constructor.
     *
     * @param string $message
     */
    public function __construct($message = "")
    {
        if (!(is_string($message) || method_exists($message, '__toString'))) {
            throw new \InvalidArgumentException(
                'The message must be a string.'
            );
        }

        if (!empty($message)) {
            $this->settings = $message;
        }
    }


    /**
     * Returns the description of the error that occurred when validating.
     *
     * @return string
     */
    public function getErrorMessage()
    {
        return $this->message;
    }


    /**
     * Returns if this rule needs the requirement field from the rule map.
     *
     * @return string
     */
    public function requirementNeeded()
    {
        return $this->requirementNeeded;
    }


    /**
     * Checks if the value follows the rules.
     *
     * @param mixed      $value       - The value of the field.
     * @param mixed|null $requirement - The needed requirements that need to be met.
     *                                If it is not provided then null is given.
     * @param array      $input       - The whole input from the validator.
     *
     * @return bool
     */
    abstract public function check($value, $requirement, $input);
}

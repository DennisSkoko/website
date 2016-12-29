<?php

namespace DS\Support\Validation;

use DS\Support\Validation\Rules\Alnum;
use DS\Support\Validation\Rules\Alpha;
use DS\Support\Validation\Rules\Email;
use DS\Support\Validation\Rules\Ip;
use DS\Support\Validation\Rules\Matches;
use DS\Support\Validation\Rules\Max;
use DS\Support\Validation\Rules\MaxLength;
use DS\Support\Validation\Rules\Min;
use DS\Support\Validation\Rules\MinLength;
use DS\Support\Validation\Rules\Numeric;
use DS\Support\Validation\Rules\Required;
use DS\Support\Validation\Rules\Url;

/**
 * Validates data according to the given rules.
 */
class Validator
{
    /**
     * @var array - Configuration for this validator
     */
    protected $settings;

    /**
     * @var Rule[] - A collection of rules that will be available when applying rules.
     */
    protected $rules;


    /**
     * Validator constructor.
     *
     * @param array $rules
     */
    public function __construct(array $rules = [])
    {
        foreach ($rules as $name => $rule) {
            if (!is_string($name)) {
                throw new \InvalidArgumentException(
                    'The collection of rules can not have any numerical index.'
                );
            }

            if (!($rule instanceof Rule)) {
                throw new \InvalidArgumentException(
                    'The rule must be an instance of ' . Rule::class . '.'
                );
            }
        }

        $this->rules = array_merge($this->getDefaultRules(), $rules);
    }


    /**
     * Validates the data with the given rules.
     *
     * @param array $data  - The data that will be validated
     * @param array $rules - The rules that will apply when validating.
     *
     * @return array
     */
    public function check(array $data, array $rules)
    {
        $errors = [];

        foreach ($rules as $field => $fieldRules) {
            $fieldRules = explode('|', $fieldRules);

            foreach ($fieldRules as $rule) {
                $value = isset($data[$field]) ? $data[$field] : null;
                $rule = $this->parseRuleData($rule);

                $result = $rule['validator']->check($value, $rule['requirement'], $data);

                if (!$result) {
                    $message = $rule['validator']->getErrorMessage();
                    $errors[$field][] = $this->parseMessage($message, $field, $value, $rule['requirement']);
                }
            }
        }

        return $errors;
    }


    /**
     * Parses the error message from the rule.
     *
     * @param string $message
     * @param string $field
     * @param mixed  $value
     * @param mixed  $requirement
     *
     * @return string
     */
    public function parseMessage($message, $field, $value, $requirement)
    {
        $search = [
            ':field',
            ':value',
            ':requirement'
        ];

        $replace = compact('field', 'value', 'requirement');

        return str_replace($search, $replace, $message);
    }


    /**
     * Parses rule data that is passed in to the validator and then returns the actual rule.
     *
     * @param string $ruleData
     *
     * @return array
     */
    public function parseRuleData($ruleData)
    {
        $ruleData = explode(':', $ruleData);

        $name = $ruleData[0];

        if (!isset($this->rules[$name])) {
            throw new \InvalidArgumentException(
                'The given rule "' . $name . '" does not exists within this validator.'
            );
        }

        $validator = $this->rules[$name];
        $requirement = isset($ruleData[1]) ? $ruleData[1] : null;

        if ($requirement === null && $validator->requirementNeeded()) {
            throw new \InvalidArgumentException(
                $name . ' requires a requirement field from the rule map.'
            );
        }

        return compact('validator', 'requirement');
    }


    /**
     * Fetches the default rules for the validator.
     *
     * @return Rule[]
     */
    public function getDefaultRules()
    {
        return [
            'alnum' => new Alnum(),
            'alpha' => new Alpha(),
            'email' => new Email(),
            'ip' => new Ip(),
            'matches' => new Matches(),
            'max' => new Max(),
            'maxLength' => new MaxLength(),
            'min' => new Min(),
            'minLength' => new MinLength(),
            'numeric' => new Numeric(),
            'required' => new Required(),
            'url' => new Url(),
        ];
    }
}

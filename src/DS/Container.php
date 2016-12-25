<?php

namespace DS;

use DS\Storage\Session;
use DS\Support\Validation\Validator;
use Illuminate\Database\Connection;
use Monolog\Logger;
use Slim\Csrf\Guard;

/**
 * {@inheritdoc}
 *
 * @property-read Logger     $log
 * @property-read Session    $session
 * @property-read Guard      $csrf
 * @property-read View       $theme
 * @property-read Connection $db
 * @property-read Validator  $validator
 */
class Container extends \Slim\Container
{
    /**
     * Will set this container as global.
     *
     * @return $this
     */
    public function setAsGlobal()
    {
        DC::setContainer($this);

        return $this;
    }
}

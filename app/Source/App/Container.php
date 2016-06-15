<?php

namespace DS\App;

use DS\Storage\Session;
use Honth\Log\Logger;

/**
 * {@inheritdoc}
 *
 * @property Logger  logger
 * @property Session session
 */
class Container extends \Slim\Container
{
    public function __construct(array $values)
    {
        parent::__construct($values);

        $defaultAppServices = new DefaultAppServices();
        $defaultAppServices->register($this);
    }
}

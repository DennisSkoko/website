<?php

namespace DS;

use DS\Storage\Session;
use DS\Support\MarkdownParser;
use DS\Support\SwiftFactory;
use Monolog\Logger;
use Slim\Csrf\Guard;

/**
 * {@inheritdoc}
 *
 * @property-read Logger         $log
 * @property-read Session        $session
 * @property-read Guard          $csrf
 * @property-read View           $theme
 * @property-read MarkdownParser $markdown
 * @property-read SwiftFactory   $mailer
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

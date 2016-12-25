<?php

namespace DS;

use \Symfony\Component\Console\Command\Command as SymfonyCommand;

abstract class Command extends SymfonyCommand
{
    /**
     * @var Container
     */
    protected $container;


    /**
     * {@inheritdoc}
     */
    public function __construct($name = null)
    {
        $this->container = DC::getContainer();
        parent::__construct($name);
    }
}

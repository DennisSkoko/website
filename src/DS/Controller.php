<?php

namespace DS;

abstract class Controller
{
    /**
     * @var Container
     */
    protected $container;


    /**
     * Controller constructor.
     *
     * @param Container $container
     */
    public function __construct(Container $container)
    {
        $this->container = $container;
    }
}

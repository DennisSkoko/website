<?php

namespace DS\Storage;

use DS\Utilities\Collection;

class Session extends Collection
{
    /**
     * Session constructor.
     *
     * @param array $config
     */
    public function __construct($config)
    {
        parent::__construct();

        $this->start($config);
        $this->items = &$_SESSION;
    }


    /**
     * Adds a flash message that will be handled by the application
     *
     * @param string $status
     * @param string $message
     */
    public function flash($status, $message)
    {
        $this->set('flash-message', compact('status', 'message'));
    }


    /**
     * Initializes the session
     *
     * @param $config
     */
    protected function start($config)
    {
        if (isset($config['name'])) {
            session_name($config['name']);
        }

        session_start();
    }
}

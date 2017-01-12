<?php

namespace DS\Controllers;

use DS\Controller;
use Slim\Http\Request;
use Slim\Http\Response;

class Projects extends Controller
{
    /**
     * @param Request  $request
     * @param Response $response
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function all(Request $request, Response $response)
    {
        $this->container->session->flash('info', 'This page is being implemented.');

        return $this->container->theme
            ->with([
                'title' => 'Projects'
            ])
            ->renderInto($response);
    }
}

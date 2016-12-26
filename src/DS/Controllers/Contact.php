<?php

namespace DS\Controllers;

use DS\Controller;
use DS\View;
use Psr\Http\Message\ResponseInterface;
use Slim\Http\Request;
use Slim\Http\Response;

class Contact extends Controller
{
    /**
     * @param Request  $request
     * @param Response $response
     *
     * @return ResponseInterface
     */
    public function form(Request $request, Response $response)
    {
        return $this->container->theme
            ->with([
                'title' => 'Contact',
                'main' => View::make('page.contact'),
            ])
            ->renderInto($response);
    }


    /**
     * @param Request  $request
     * @param Response $response
     *
     * @return ResponseInterface
     */
    public function process(Request $request, Response $response)
    {
        return $response->withRedirect($this->container->router->pathFor('contact'));
    }
}

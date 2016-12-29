<?php

namespace DS\Controllers;

use DS\Controller;
use DS\Utilities\Path;
use DS\View;
use Psr\Http\Message\ResponseInterface;
use Slim\Http\Request;
use Slim\Http\Response;

class Main extends Controller
{
    /**
     * @param Request  $request
     * @param Response $response
     *
     * @return ResponseInterface
     */
    public function home(Request $request, Response $response)
    {
        return $this->container->theme
            ->with([
                'title' => 'Welcome',
                'main' => View::make('page.home')
            ])
            ->renderInto($response);
    }
}

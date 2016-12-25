<?php

namespace DS\Controllers;

use DS\Controller;
use DS\View;
use Slim\Http\Request;
use Slim\Http\Response;

class Main extends Controller
{
    public function home(Request $request, Response $response)
    {
        return $this->container->theme
            ->with([
                'title' => 'Welcome'
            ])
            ->renderInto($response);
    }
}

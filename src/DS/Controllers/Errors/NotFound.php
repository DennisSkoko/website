<?php

namespace DS\Controllers\Errors;

use DS\Controller;
use DS\View;
use Slim\Http\Request;
use Slim\Http\Response;

class NotFound extends Controller
{
    /**
     * @param Request  $request
     * @param Response $response
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function __invoke(Request $request, Response $response)
    {
        return $this->container->theme
            ->with([
                'title' => 'Not Found',
                'main' => View::make('page.errors.not-found')
            ])
            ->renderInto($response);
    }
}

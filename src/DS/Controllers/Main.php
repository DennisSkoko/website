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
        $intro = $this->container->markdown->file(Path::make(['res', 'content'], 'intro.md'));
        $content = $this->container->markdown->file(Path::make(['res', 'content'], 'about.md'));

        return $this->container->theme
            ->with([
                'title' => 'Welcome',
                'main' => View::make('page.home')
                    ->with(compact('intro', 'content'))
            ])
            ->renderInto($response);
    }
}

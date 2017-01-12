<?php

namespace DS\Controllers\Errors;

use DS\Controller;
use DS\View;
use Slim\Http\Request;
use Slim\Http\Response;

/**
 * Handles generic PHP errors.
 */
class Error extends Controller
{
    /**
     * @param Request    $request
     * @param Response   $response
     * @param \Exception $exception
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function __invoke(Request $request, Response $response, \Exception $exception)
    {
        $this->log($exception);

        return $this->container->theme
            ->with([
                'title' => 'Internal Server Error',
                'main' => View::make('page.errors.internal-error')
                    ->with(['exception' => $exception]),
            ])
            ->renderInto($response);
    }


    /**
     * Logs the exception.
     *
     * @param \Exception $exception
     */
    public function log(\Exception $exception)
    {
        // Log the previous log first.
        if ($exception->getPrevious() !== null) {
            $this->log($exception->getPrevious());
        }

        $this->container->logger->error(
            $exception->getMessage(),
            [
                'file' => $exception->getFile(),
                'line' => $exception->getLine(),
            ]
        );
    }
}

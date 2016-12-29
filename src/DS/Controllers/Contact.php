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
        $post = $request->getParsedBody();

        // Check if all parameters are sent
        if (!isset($post['email'], $post['subject'], $post['message'])) {
            $this->container->session->flash('warning', 'Some parameters were missing from the request.');

            return $response->withRedirect($this->container->router->pathFor('contact'), 422);
        }


        // Now filter the parameters
        array_walk($post, function (&$item) {
            $item = htmlspecialchars($item);
        });

        $post['messageHTML'] = $this->container->markdown->text($post['message']);


        // Make the message
        $message = $this->container->mailer->message();

        $message
            ->setTo([
                $this->container->settings['contact']['email'] => $this->container->settings['contact']['name']
            ])
            ->setSubject($post['subject'])
            ->setBody($post['message'])
            ->addPart($post['messageHTML'], 'text/html');

        // Send it
        $this->container->logger->info('Sending an email...');
        $result = $this->container->mailer->send($message);


        // Respond to error if it occurred
        if ($result === 0) {
            $this->container->logger->critical('Failed when trying to send an email', $post);
            $this->container->session->flash(
                'danger',
                'An error occured when trying to send the email. Please try again in a few minutes.'
            );

            return $response->withRedirect($this->container->router->pathFor('contact'), 500);
        }


        // Success, inform the client
        $this->container->logger->info('Successfully sent an email.');
        $this->container->session->flash(
            'success',
            'An email has been sent to ' . $this->container->settings['contact']['name'] . ' with the contents that you have given.'
        );

        return $response->withRedirect($this->container->router->pathFor('contact'));
    }
}

<?php

namespace DS\Providers;

use DS\Support\SwiftFactory;
use DS\Storage\Session;
use DS\Support\MarkdownParser;
use DS\Support\Validation\Validator;
use DS\View;
use DS\ViewManager;
use Monolog\Handler\RotatingFileHandler;
use Monolog\Logger;
use Pimple\Container;
use Pimple\ServiceProviderInterface;
use Slim\Csrf\Guard;

/**
 * Register the services used by this application.
 */
class AppServices implements ServiceProviderInterface
{
    /**
     * {@inheritdoc}
     */
    public function register(Container $container)
    {
        // View
        $manager = new ViewManager($container['settings']['view']);
        $manager->setAsGlobal();


        /**
         * @param Container $c
         *
         * @return Logger
         */
        $container['logger'] = function (Container $c) {
            $settings = $c['settings']['logger'];

            $logger = new Logger($settings['name']);
            $logger->pushHandler(
                new RotatingFileHandler($settings['filename'], $settings['maxFiles'], $settings['minLevel'])
            );

            return $logger;
        };


        /**
         * @param Container $c
         *
         * @return Session
         */
        $container['session'] = function (Container $c) {
            return new Session($c['settings']['session']);
        };


        /**
         * @param Container $c
         *
         * @return Guard
         */
        $container['csrf'] = function (Container $c) {
            $c['session']; // Starts the session.
            return new Guard($c['settings']['csrf']['name']);
        };


        /**
         * @param Container $c
         *
         * @return View
         */
        $container['theme'] = function (Container $c) {
            $settings = require $c['settings']['theme']['file'];

            if ($c['session']->has('flash-message')) {
                $settings['flash'] = View::make('widget.flash-message')->with($c['session']->pull('flash-message'));
            }

            // Route parser
            $routeParser = function (&$route) use ($c) {
                $route = $c['router']->pathFor($route);
            };

            // Parse the navbar route names.
            $routeParser($settings['navbar']['brand']['url']);
            array_walk($settings['navbar']['links'], function (&$item) use ($c, $routeParser) {
                if (is_array($item)) {
                    array_walk($item, $routeParser);
                } else {
                    $routeParser($item);
                }
            });

            return View::make($settings['file'])->with($settings);
        };


        /**
         * @return Validator
         */
        $container['validator'] = function () {
            return new Validator();
        };


        /**
         * @return MarkdownParser
         */
        $container['markdown'] = function () {
            return new MarkdownParser();
        };


        /**
         * @param Container $c
         *
         * @return SwiftFactory
         */
        $container['mailer'] = function (Container $c) {
            return new SwiftFactory($c['settings']['mailer']);
        };

    }
}

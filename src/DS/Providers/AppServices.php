<?php

namespace DS\Providers;

use DS\Storage\Session;
use DS\Support\Validation\Validator;
use DS\View;
use DS\ViewManager;
use Illuminate\Database\Capsule\Manager;
use Illuminate\Database\Connection;
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
        $container['log'] = function (Container $c) {
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

            // Parse the navbar route names.
            array_walk($settings['navbar']['links'], function (&$item) use ($c) {
                $item = $c['router']->pathFor($item);
            });

            return View::make($settings['file'])->with($settings);
        };


        /**
         * @return \Parsedown
         */
        $container['markdown'] = function () {
            return new \Parsedown();
        };

    }
}

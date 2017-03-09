/*
 * This is where the application gets defined.
 * All of the modules, middleware and more gets bundled together in here.
 */
'use strict';

// Require configuration
var settings = require('../config/app');
var theme = require('../config/theme');

// Require node modules
var path = require('path');
var express = require('express');

// Require routes and middleware
var routes = require('./routes');
var middlewares = require('./middlewares');

// Require handlers
var errorHandler = require('./handlers/error');
var notFoundHandler = require('./handlers/not-found');

// Create an application
var app = express();

// Inject the settings into the application
app.set('env', settings.env);
app.set('settings', settings);
app.set('theme', theme);

// Set view engine
app.set('views', path.resolve(__dirname, '..', settings.view.folder));
app.set('view engine', settings.view.engine);

// Add middleware
app.use(express.static(path.resolve(__dirname, '..', settings.publicDir)));

for (let middleware of middlewares) {
    if (Array.isArray(middleware.call)) {
        for (let call in middleware.call) {
            app.use(middleware.path, call);
        }
    }
    else {
        app.use(middleware.path, middleware.call);
    }
}

// Add routes
for (let route of routes) {
    if (Array.isArray(route.router)) {
        for (let router in route.router) {
            app.use(route.path, router);
        }
    }
    else {
        app.use(route.path, route.router);
    }
}

// Add error handlers
app.use(errorHandler);
app.use(notFoundHandler);

// Export it
module.exports = app;

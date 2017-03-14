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
var expressValidator = require('express-validator');
var session = require('express-session');
var bodyParser = require('body-parser');

// Require services
var logger = require('./logger');
var validator = require('./validation/validator');

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

// Inject the services into the application
app.set('logger', logger(settings.logger));
app.set('validator', validator);

// Set view engine
app.set('views', path.resolve(__dirname, '..', settings.view.folder));
app.set('view engine', settings.view.engine);

// Add body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Add session
app.use(session(settings.session));

// Add validator
app.use(expressValidator());

// Add middleware
for (let middleware of middlewares) {
  for (let callable of middleware.callables) {
    app.use(middleware.path, callable);
  }
}

// Add the public folder
app.use(express.static(path.resolve(__dirname, '..', settings.publicDir)));

// Add routes
for (let route of routes) {
  for (let router of route.routers) {
    app.use(route.path, router);
  }
}

// Add error handlers
app.use(errorHandler);
app.use(notFoundHandler);

// Export it
module.exports = app;

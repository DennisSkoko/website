/*
 * This is where the application gets defined.
 * All of the modules, middleware and more gets bundled together in here.
 */
'use strict'

// Require configuration
const settings = require('../conf/app')

// Require node modules
const express = require('express')
const expressValidator = require('express-validator')
const bodyParser = require('body-parser')

// Require services
const logger = require('./logger')

// Require routes and middleware
const routes = require('./routes')
const middlewares = require('./middlewares')

// Require handlers
const errorHandler = require('./handlers/error')

// Create an application
const app = express()

// Inject the settings into the application
app.set('env', settings.env)
app.set('settings', settings)

// Inject the services into the application
app.set('logger', logger(settings.logger))

// Add middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator())

for (let middleware of middlewares) {
  for (let callable of middleware.callables) {
    app.use(middleware.path, callable)
  }
}

// Add the public folder
app.use(express.static(settings.publicDir))

// Add routes
for (let route of routes) {
  for (let router of route.routers) {
    app.use(route.path, router)
  }
}

// Add error handlers
app.use(errorHandler)

// Export it
module.exports = app

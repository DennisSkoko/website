'use strict'

const express = require('express')
const helmet = require('helmet')

module.exports = ({ settings, middlewares }) => [
  middlewares.logger,
  helmet(),
  express.json(),
  express.urlencoded({ extended: true }),
  // Object.values(middlewares.routers),
  middlewares.notFound,
  middlewares.error
]

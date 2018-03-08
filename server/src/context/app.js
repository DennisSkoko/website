'use strict'

const express = require('express')

module.exports = ({ middlewares }) => {
  const app = express()

  app.use(middlewares)

  return app
}

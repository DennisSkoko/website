/*
 * Configuration for the application.
 */
'use strict'

const path = require('path')

const root = path.resolve(__dirname, '..')

require('dotenv').config({
  path: path.resolve(root, '.env')
})

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 80,

  publicDir: path.resolve(root, 'public'),

  view: {
    folder: path.resolve(root, 'res/views'),
    engine: 'pug',
    pretty: process.env.NODE_ENV === 'production'
  },

  logger: {
    level: process.env.LOG_LEVEL || 'info',
    timestamp: true,
    colorize: true,
    stderrLevels: ['error']
  }
}

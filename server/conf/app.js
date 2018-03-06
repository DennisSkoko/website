'use strict'

const path = require('path')

const root = path.resolve(__dirname, '..')

require('dotenv').config({
  path: path.join(root, '.env')
})

module.exports = () => ({
  logger: {
    level: process.env.LOG_LEVEL || 'info'
  },

  template: {
    encoding: 'utf8',
    path: path.join(root, 'res', 'templates')
  },

  mailer: {
    service: process.env.EMAIL_PROVIDER || 'Hotmail',
    auth: {
      user: process.env.EMAIL_USER || 'something@example.com',
      pass: process.env.EMAIL_PASS || 'secret'
    },
    receiver: process.env.EMAIL_SENDTO || 'receiver@example.com'
  },

  http: {
    port: process.env.HTTP_PORT || 80
  }
})

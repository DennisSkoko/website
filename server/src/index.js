'use strict'

const loader = require('./util/context-loader')

module.exports = loader([
  { name: 'settings', path: '../conf/app' },
  { path: 'context/logger' },
  { path: 'context/template' },
  {
    path: 'context/mailer',
    modules: [
      { path: 'transporter' },
      { path: 'send' }
    ]
  },
  {
    path: 'middlewares',
    modules: [
      { path: 'error' },
      { path: 'logger' },
      { name: 'notFound', path: 'not-found' },
      {
        path: 'routers',
        modules: []
      }
    ]
  },
  { path: 'middlewares' },
  { path: 'context/app' },
  { path: 'context/http' }
])

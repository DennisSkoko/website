/*
 * This is where all of the middlewares is bundled together.
 */
'use strict'

module.exports = [
  {
    path: '/',
    callables: [
      require('./middleware/req-path'),
      require('./middleware/req-log')
    ]
  }
]

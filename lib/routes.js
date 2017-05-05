/*
 * This is where all of the routes is bundled together.
 */
'use strict'

module.exports = [
  {
    path: '/',
    routers: [
      require('./routes/index'),
      require('./routes/contact')
    ]
  }
]

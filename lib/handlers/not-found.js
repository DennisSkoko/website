/*
 * Whenever a request comes along and there is no defined route for that path
 * then this handler will generate a 404 Not Found page.
 */
'use strict'

module.exports = function (req, res) {
  res.status(404).render('page/status/not-found', {
    title: 'Not Found'
  })
}

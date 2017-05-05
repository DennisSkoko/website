/*
 * If an error occurs within the application, this handler will be responsible
 * for making sure the error is properly handled.
 */
'use strict'

module.exports = (err, req, res, next) => {
  res.app.get('logger').error('Failed to respond to the request', {
    error: err.message
  })

  res.status(500).render('page/status/error', {
    title: 'Internal Server Error'
  })
}

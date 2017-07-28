/*
 * If an error occurs within the application, this handler will be responsible
 * for making sure the error is properly handled.
 */
'use strict'

module.exports = (err, req, res, next) => {
  res.app.get('logger').error('Failed to respond to the request', {
    error: err.message
  })

  if (req.accepts('html')) {
    res.status(500).send('<h1>Internal Server Error</h1>')
  } else if (req.accepts('json')) {
    res.status(500).json({
      status: 'Internal Server Error'
    })
  } else {
    res.status(406)
  }
}

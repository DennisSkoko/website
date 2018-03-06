'use strict'

module.exports = ({ logger }) => (err, req, res, next) => {
  logger.error('Failed to respond to a request', {
    error: err.message
  })

  res.status(500).json({
    status: 'Internal Server Error'
  })
}

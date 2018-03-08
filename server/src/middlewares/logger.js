'use strict'

const time = (start) => {
  const delta = Date.now() - start
  return delta < 1000
    ? delta + 'ms'
    : (delta / 1000) + 's'
}

module.exports = ({ logger }) => (req, res, next) => {
  const start = Date.now()

  logger.silly('Responding to a request', {
    ip: req.ip,
    method: req.method,
    path: req.path
  })

  res.on('finish', () => {
    logger.verbose('Reponded to a request', {
      time: time(start),
      ip: req.ip,
      method: req.method,
      path: req.path
    })
  })

  next()
}

/*
 * Will initiate and configure a logger that will be used within the application.
 */
'use strict'

const winston = require('winston')
const moment = require('moment')

module.exports = (settings) => {
  const logger = new winston.Logger()

  settings.formatter = (options) => {
    let result = ''

    // Timestamp
    result += '[' + options.timestamp() + ']'

    // Color
    result += ' ' + (options.colorize
      ? winston.config.colorize(options.level, options.level.toUpperCase())
      : options.level.toUpperCase())

    // Message
    result += ': ' + options.message

    // Meta
    if (options.meta) {
      result += ' | ' + JSON.stringify(options.meta)
    }

    return result
  }

  // If timestamp is true then use a custom timestamp
  if (settings.timestamp) {
    settings.timestamp = () => moment().format('DD-MM-YYYY HH:mm')
  }

  logger.add(winston.transports.Console, settings)

  return logger
}

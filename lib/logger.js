/*
 * Will initiate and configure a logger that will be used within the application.
 */
'use strict';

var winston = require('winston');
var moment = require('moment');

module.exports = function(settings) {
    var logger = new winston.Logger();

    // Add all the configured transports
    for (let transport of settings.transports) {
        // Add the custom formatter
        transport.options.formatter = function(options) {
            var result = '';

            result += '[' + options.timestamp() + ']';

            if (transport.type == 'Console')
                result += ' ' + winston.config.colorize(options.level, options.level.toUpperCase());
            else
                result += ' ' + options.level.toUpperCase();

            result += ': ' + options.message;

            if (options.meta) {
                result += ' | ' + JSON.stringify(options.meta);
            }

            return result;
        };

        // If it should use timestamp then use custom format
        if (transport.options.timestamp) {
            transport.options.timestamp = function() {
                return moment().format('DD-MM-YYYY HH:mm');
            }
        }

        logger.add(winston.transports[transport.type], transport.options);
    }

    return logger;
};

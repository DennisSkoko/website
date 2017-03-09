/*
 * Configuration for the application.
 */
'use strict';

require('dotenv').config();

var path = require('path');
var logger = require('winston');

const INSTALL_PATH = path.resolve(__dirname, '..');

module.exports = {

    env: process.env.ENV || 'development',
    port: process.env.PORT || 80,

    publicDir: 'public',

    view: {
        folder: 'res/views',
        engine: 'pug'
    },

    logger: {
        transports: [
            new logger.transports.Console({
                level: 'info',
                timestamp: false,
                stderrLevels: ['error'],
                colorize: true,
                prettyPrint: true
            }),

            new logger.transports.File({
                filename: path.resolve(INSTALL_PATH, 'logs/errors.log'),
                level: 'error',
                timestamp: true,
                json: false,
                prettyPrint: true
            })
        ]
    },

    content: {
        markdown: {
            about: path.resolve(INSTALL_PATH, 'res/content/about.md')
        }
    }

};

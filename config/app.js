/*
 * Configuration for the application.
 */
'use strict';

require('dotenv').config();

var path = require('path');
var logger = require('winston');
var moment = require('moment');

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
            {
                type: 'Console',
                options: {
                    level: 'silly',
                    timestamp: true,
                    stderrLevels: ['error']
                }
            },

            {
                type: 'File',
                options: {
                    filename: path.resolve(INSTALL_PATH, 'logs/errors.log'),
                    level: 'error',
                    timestamp: true,
                    json: false
                }
            }
        ]
    },

    content: {
        markdown: {
            about: path.resolve(INSTALL_PATH, 'res/content/about.md')
        }
    }

};

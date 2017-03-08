/*
 * Configuration for the application.
 */
'use strict';

require('dotenv').config();

var path = require('path');

const INSTALL_PATH = path.resolve(__dirname, '..');

module.exports = {

    env: process.env.ENV || 'development',
    port: process.env.PORT || 80,

    publicDir: 'public',

    view: {
        folder: 'res/views',
        engine: 'pug'
    },

    content: {
        markdown: {
            about: path.resolve(INSTALL_PATH, 'res/content/about.md')
        }
    }

};

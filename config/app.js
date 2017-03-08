/*
 * Configuration for the application.
 */
'use strict';

var path = require('path');

const INSTALL_PATH = path.resolve(__dirname, '..');

module.exports = {

    port: 80,
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

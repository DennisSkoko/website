/*
 * This is where all of the middleware is bundled together.
 */
'use strict';

module.exports = [
    {
        path: '/',
        call: require('./middleware/req-path')
    }
];
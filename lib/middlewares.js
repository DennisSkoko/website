/*
 * This is where all of the middleware is bundled together.
 */
'use strict';

module.exports = [
    {
        path: '/',
        callables: [
            require('./middleware/req-path'),
            require('./middleware/req-log')
        ]
    }
];

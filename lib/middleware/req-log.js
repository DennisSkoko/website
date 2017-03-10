/*
 * Will log to the logger that a request came and that the application will handle it.
 */
'use strict';

module.exports = function(req, res, next) {
    res.app.get('logger').info(
        'Responding to a request',
        {client: req.ip, path: req.path}
    );

    next();
};

/*
 * Will put the request path into the response locals.
 * This is done so that the request path can be accessed within the views.
 */
'use strict';

module.exports = function(req, res, next) {
    res.locals.reqPath = req.path;
    next();
};

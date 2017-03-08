/*
 * If an error occurs within the application, this handle will be responsible
 * for making sure the error is propeply handled.
 */
'use strict';

module.exports = function(err, req, res, next) {
    console.error(err);
    res.status(500).render('page/status/error', {
        title: 'Internal Server Error'
    });
};
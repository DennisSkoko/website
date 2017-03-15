/*
 * Will add flash message data from session if it exists into response locals.
 */
'use strict';

module.exports = function (req, res, next) {
  if (req.session.hasOwnProperty('flash')) {
    res.locals.flash = req.session.flash;
    delete req.session.flash;
  }

  next();
};

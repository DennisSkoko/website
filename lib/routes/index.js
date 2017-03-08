/*
 * The main routes for the application.
 */
'use strict';

var router = require('express').Router();

router.get('/', function(req, res, next) {
    res.render('page/index');
});

module.exports = router;

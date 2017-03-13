/*
 * The main routes for the application.
 */
'use strict';

var fs = require('fs');
var markdown = require('markdown').markdown;

var router = require('express').Router();

router.get('/', function(req, res, next) {
    var file = res.app.get('settings').content.markdown.about;

    fs.readFile(file, 'utf8', function(err, data) {
        if (err)
            return next(err);

        res.render('page/index', {
            content: markdown.toHTML(data)
        });
    });
});

router.get('/projects', function(req, res) {
    res.render('page/projects', {
        title: 'Projects'
    });
});

router.get('/contact', function(req, res) {
    res.render('page/contact', {
        title: 'Contact'
    });
});

router.post('/contact', function(req, res) {
    res.app.get('validator')
        .check(req, 'contact', function(result) {
            if (!result.isEmpty()) {
                return res.send('Failed<br>' + JSON.stringify(result.mapped()));
            }

            res.send('success');
        });
});

module.exports = router;

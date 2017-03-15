/*
 * The main routes for the application.
 */
'use strict';

var fs = require('fs');
var markdown = require('markdown').markdown;

var router = require('express').Router();

// Homepage
router.get('/', function (req, res, next) {
  var file = res.app.get('settings').content.markdown.about;

  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      return next(err);
    }

    res.render('page/index', {
      content: markdown.toHTML(data)
    });
  });
});

// Projects
router.get('/projects', function (req, res) {
  res.render('page/projects', {
    title: 'Projects'
  });
});

// Contact
router.get('/contact', function (req, res) {
  res.render('page/contact', {
    title: 'Contact'
  });
});

// Contact process
router.post('/contact', function (req, res, next) {
  res.app.get('validator')
    .check(req, 'contact', function (result) {
      if (!result.isEmpty()) {
        req.session.flash = {
          status: 'warning',
          message: 'Failed to send the message because of invalid input.'
        };

        return res.redirect('contact');
      }

      // Escape htmlentities
      req.sanitize('subject').escape();
      req.sanitize('message').escape();

      // Add the author of this message.
      req.body.message += '\n\nFrom: ' + req.body.email;

      // Create the message
      var message = {
        from: res.app.get('settings').mailer.auth.user,
        to: res.app.get('settings').mailer.to.email,
        subject: req.body.subject,
        text: req.body.message,
        html: '<html><body>' + markdown.toHTML(req.body.message) + '</body></html>'
      };

      // Send it
      res.app.get('mailer').sendMail(message, function (err, info) {
        if (err) {
          return next(err);
        }

        // Notify the maintainers that we have sent an email
        res.app.get('logger').info('Sent a mail', {
          to: res.app.get('settings').mailer.to.email
        });

        // Notify the client it has been successful
        req.session.flash = {
          status: 'success',
          message: 'Has successfully sent the message.'
        };

        // Lastly redirect
        return res.redirect('/contact');
      });
    });
});

module.exports = router;

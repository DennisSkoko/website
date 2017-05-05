/*
 * The main routes for the application.
 */
'use strict'

const router = require('express').Router()
const markdown = require('markdown').markdown

router.get('/contact', (req, res) => {
  switch (req.query.s) {
    case 'success':
      res.locals.flash = {
        status: 'success',
        message: 'The message has been sent successfully.'
      }
      break

    case 'invalid':
      res.locals.flash = {
        status: 'warning',
        message: 'The given values are invalid, please check your input and try again.'
      }
      break

    case 'error':
      res.locals.flash = {
        status: 'danger',
        message: 'We are sorry but something happend when trying to send the email.'
      }
      break
  }

  res.render('page/contact', { title: 'Contact' })
})

router.post('/contact', (req, res, next) => {
  req.sanitizeBody('email').trim()
  req.sanitizeBody('subject').trim()
  req.sanitizeBody('message').trim()

  req.checkBody('email').notEmpty().isEmail()
  req.checkBody('subject').notEmpty().isLength({ min: 3, max: 35 })
  req.checkBody('message').notEmpty().isLength({ max: 800 })

  req.sanitizeBody('subject').escape()
  req.sanitizeBody('message').escape()

  req.getValidationResult()
    .then((result) => {
      if (!result.isEmpty()) {
        res.status(422).redirect('/contact?s=invalid')
        return
      }

      req.body.message += '\n\nFrom: ' + req.body.email

      let message = {
        from: res.app.get('settings').mailer.auth.user,
        to: res.app.get('settings').mailer.to.email,
        subject: req.body.subject,
        text: req.body.message,
        html: '<html><body>' + markdown.toHTML(req.body.message) + '</body></html>'
      }

      res.app.get('logger').info('Sending a mail', { form: req.body.email })

      res.status(422).redirect('/contact?s=success')
    })
    .catch((err) => { next(err) })
})

module.exports = router

/*
 * The main routes for the application.
 */
'use strict'

const path = require('path')
const markdown = require('markdown').markdown
const router = require('express').Router()

router.post('/api/send-mail', (req, res, next) => {
  req.sanitize('email').trim()
  req.sanitize('subject').trim()
  req.sanitize('message').trim()

  req.checkBody('email', 'Invalid email').notEmpty().isEmail()
  req.checkBody('subject', 'Invalid subject').notEmpty().isLength({max: 25 })
  req.checkBody('message', 'Invalid message').notEmpty().isLength({max: 250 })

  req.getValidationResult()
    .then(result => {
      if (!result.isEmpty()) {
        return res.status(422).json({
          status: 'Invalid values'
        })
      }

      req.body.message += '\n\nFrom: ' + req.body.email

      const message = {
        from: res.app.get('settings').mailer.auth.user,
        to: res.app.get('settings').mailer.to.email,
        subject: req.body.subject,
        text: req.body.message,
        html: '<html><body>' + markdown.toHTML(req.body.message) + '</body></html>'
      }

      res.app.get('mailer').sendMail(message, err => {
        if (err) return next(err)

        res.app.get('logger').info('Sent a mail', { from: req.body.email })
        res.json({ status: 'Ok' })
      })
    })
})

router.use((req, res) => {
  res.sendFile(path.resolve(res.app.get('settings').publicDir, 'index.html'))
})

module.exports = router

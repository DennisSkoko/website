/*
 * The main routes for the application.
 */
'use strict'

const router = require('express').Router()

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

  req.checkBody('email').notEmpty({ checkFalsy: true }).isEmail()
  req.checkBody('subject').notEmpty({ checkFalsy: true }).isLength({ min: 3, max: 35 })
  req.checkBody('message').notEmpty({ checkFalsy: true }).isLength({ max: 800 })

  req.getValidationResult()
    .then((result) => {
      if (!result.isEmpty()) {
        res.status(422).redirect('/contact?s=invalid')
        return
      }

      res.status(422).redirect('/contact?s=success')
    })
    .catch((err) => { next(err) })
})

module.exports = router

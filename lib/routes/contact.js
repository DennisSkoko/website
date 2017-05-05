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

    case 'warning':
      res.locals.flash = {
        status: 'warning',
        message: 'The given values are invalid, please check your input and try again.'
      }
      break

    case 'error':
      res.locals.flash = {
        status: 'error',
        message: 'We are sorry but something happend when trying to send the email.'
      }
      break
  }

  res.render('page/contact', { title: 'Contact' })
})

router.post('/contact', (req, res) => {
  res.redirect('/contact?s=success')
})

module.exports = router

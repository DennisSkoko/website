/*
 * The main routes for the application.
 */
'use strict'

const path = require('path')

const router = require('express').Router()

router.post('/api/send-mail', (req, res) => {
  req.sanitize('email').trim()
  req.sanitize('subject').trim()
  req.sanitize('message').trim()

  req.checkBody('email', 'Invalid email').notEmpty().isEmail()
  req.checkBody('subject', 'Invalid subject').notEmpty().isLength({max: 25 })
  req.checkBody('message', 'Invalid message').notEmpty().isLength({max: 250 })

  req.getValidationResult()
    .then(result => {
      if (result.isEmpty()) {
        res.json({
          status: 'Ok'
        })
      } else {
        res.status(422).json({
          status: 'Invalid values'
        })
      }
    })
})

router.use((req, res) => {
  res.sendFile(path.resolve(res.app.get('settings').publicDir, 'index.html'))
})

module.exports = router

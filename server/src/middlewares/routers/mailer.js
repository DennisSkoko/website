'use strict'

const express = require('express')
const { body, validationResult } = require('express-validator/check')

module.exports = ({ mailer }) => {
  const router = express.Router()

  router.post('/api/send-mail', [
    body('email', 'must be a valid email address')
      .trim()
      .not().isEmpty()
      .isEmail(),
    body('subject', 'must be between 5 and 30 characters long')
      .trim()
      .not().isEmpty()
      .isLength({ min: 5, max: 30 }),
    body('message', 'must be between 10 and 150 characters long')
      .trim()
      .not().isEmpty()
      .isLength({ min: 10, max: 150 })
  ], (req, res, next) => {
    const errors = validationResult(req)
      .formatWith(({ msg, param }) => `${param} ${msg}`)

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array({ onlyFirstError: true })
      })
    }

    mailer.send(req.body)
      .then(() => {
        res.json({
          status: 'sent'
        })
      })
      .catch(next)
  })

  return router
}

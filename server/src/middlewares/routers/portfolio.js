'use strict'

const express = require('express')

module.exports = ({ storage }) => {
  const router = express.Router()

  router.get('/api/portfolio', (req, res, next) => {
    storage('portfolio')
      .then(portfolio => {
        res.send(portfolio)
      })
      .catch(next)
  })

  return router
}

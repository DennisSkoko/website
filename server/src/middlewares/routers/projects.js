'use strict'

const express = require('express')

module.exports = ({ storage }) => {
  const router = express.Router()

  router.get('/api/projects', (req, res, next) => {
    storage('projects')
      .then(projects => {
        res.send(projects)
      })
      .catch(next)
  })

  return router
}

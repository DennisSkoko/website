/*
 * The main routes for the application.
 */
'use strict'

const router = require('express').Router()

// Index
router.get('/', (req, res) => {
  res.render('page/index')
})

module.exports = router

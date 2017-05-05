/*
 * The main routes for the application.
 */
'use strict'

const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('page/index')
})

router.get('/projects', (req, res) => {
  res.locals.flash = {
    status: 'info',
    message: 'This page is under development and will come soon.'
  }

  res.render('page/projects', { title: 'Projects' })
})

module.exports = router

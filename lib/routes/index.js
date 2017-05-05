/*
 * The main routes for the application.
 */
'use strict'

const router = require('express').Router()

// Index
router.get('/', (req, res) => {
  res.render('page/index')
})

// Projects
router.get('/projects', (req, res) => {
  res.locals.flash = {
    status: 'info',
    message: 'This page is under development and will come soon.'
  }

  res.render('page/projects', { title: 'Projects' })
})

// Contact page
router.get('/contact', (req, res) => {
  res.render('page/contact', { title: 'Contact' })
})

module.exports = router

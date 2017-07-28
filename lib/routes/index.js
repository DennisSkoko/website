/*
 * The main routes for the application.
 */
'use strict'

const path = require('path')

const router = require('express').Router()

router.use((req, res) => {
  res.sendFile(path.resolve(res.app.get('settings').publicDir, 'index.html'))
})

module.exports = router

'use strict'

const path = require('path')

module.exports = ({ settings }) => (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({
      status: 'Not Found'
    })
  }

  res.sendFile(path.join(settings.serve, 'index.html'))
}

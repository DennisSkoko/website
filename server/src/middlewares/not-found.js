'use strict'

module.exports = ({ settings }) => (req, res) => {
  res.status(404).json({
    status: 'Not Found'
  })
}

'use strict'

const path = require('path')
const fs = require('fs')

module.exports = ({ settings }) => name =>
  new Promise((resolve, reject) => {
    fs.readFile(
      path.join(settings.storage.path, name + '.json'),
      settings.storage.encoding,
      (err, contents) => {
        if (err) reject(err)
        else resolve(contents)
      }
    )
  })
    .then(JSON.parse)

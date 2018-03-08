'use strict'

const path = require('path')
const template = require('lodash.template')
const fs = require('fs')

module.exports = ({ settings }) => name => {
  const source = fs.readFileSync(
    path.join(settings.template.path, name + '.txt'),
    settings.template.encoding
  )

  return template(source)
}

'use strict'

function validate(portfolioWork) {
  return ['title', 'description', 'url']
    .filter(field => !portfolioWork[field])
    .map(field => ({ field, message: 'is required' }))
}

module.exports = validate

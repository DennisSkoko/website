'use strict'

class EmptyRequiredField extends TypeError {
  constructor(field, { when } = {}) {
    if (!field) throw new TypeError('`field` is required')

    let message = `\`${field}\` is required`
    if (when) message = `${message} when ${when}`

    super(message)
  }
}

module.exports = EmptyRequiredField

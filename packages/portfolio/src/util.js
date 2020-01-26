'use strict'

function isRegularObject(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    value.constructor.name === 'Object'
  )
}

function mapObject(object, func) {
  const newObject = {}

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = object[key]
      const { key: newKey, value: newValue } = func({ value, key }) || {}

      newObject[newKey || key] = newValue || value
    }
  }

  return newObject
}

function toCamelCase(object) {
  return mapObject(object, ({ value, key }) => ({
    key: key.charAt(0).toLowerCase() + key.substring(1),
    value: isRegularObject(value) ? toCamelCase(value) : value
  }))
}

function toPascalCase(object) {
  return mapObject(object, ({ value, key }) => ({
    key: key.charAt(0).toUpperCase() + key.substring(1),
    value: isRegularObject(value) ? toPascalCase(value) : value
  }))
}

module.exports = { isRegularObject, mapObject, toCamelCase, toPascalCase }

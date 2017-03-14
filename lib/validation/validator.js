/*
 * A simple validator for easy using when validating input data from the client.
 */
'use strict';

var schemas = {
  contact: require('./schemas/contact')
};

module.exports = {
  check: function (req, schema, handler) {
    // Check if schema is defined
    if (!schemas.hasOwnProperty(schema)) {
      throw 'Undefined schema';
    }

    // Load the schema
    schema = schemas[schema];

    // Default will trim all parameters to minimize whitespace
    for (var param in schema) {
      if (schema.hasOwnProperty(param)) {
        req.sanitize(schema[param]).trim();
      }
    }

    req.check(schema);
    req.getValidationResult().then(handler);
  }
};

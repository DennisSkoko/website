/*
 * A validation schema for validating the contact form.
 */
'use strict';

module.exports = {
  email: {
    isEmail: {
      errorMessage: 'Must be a valid email address'
    }
  },

  subject: {
    notEmpty: {
      errorMessage: 'Cannot be empty'
    },

    isLength: {
      options: {min: 3, max: 35},
      errorMessage: 'Must be between 3 and 35 characters long'
    }
  },

  message: {
    notEmpty: {
      errorMessage: 'Cannot be empty'
    },

    isLength: {
      options: {min: 5, max: 800},
      errorMessage: 'Must be between 5 and 800 characters long'
    }
  }
};

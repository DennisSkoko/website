'use strict'

const nodemailer = require('nodemailer')

module.exports = ({ settings }) =>
  nodemailer.createTransport(settings.mailer)

'use strict'

module.exports = ({ settings, transporter }) =>
  ({ subject, text }) => new Promise((resolve, reject) => {
    const message = {
      from: settings.mailer.auth.user,
      to: settings.mailer.receiver,
      subject,
      text
    }

    transporter.sendMail(message, err => {
      if (err) reject(err)
      else resolve()
    })
  })

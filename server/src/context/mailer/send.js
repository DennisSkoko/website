'use strict'

module.exports = ({ settings, template, transporter }) => {
  const format = template('email')

  return ({ from, subject, message }) => new Promise((resolve, reject) => {
    message = {
      from: settings.mailer.auth.user,
      to: settings.mailer.receiver,
      subject,
      text: format({ message, from })
    }

    transporter.sendMail(message, err => {
      if (err) reject(err)
      else resolve()
    })
  })
}

'use strict'

module.exports = ({ settings, template, mailer }) => {
  const format = template('email')

  return ({ email, subject, message }) => new Promise((resolve, reject) => {
    message = {
      from: settings.mailer.auth.user,
      to: settings.mailer.receiver,
      subject,
      text: format({ message, from: email })
    }

    mailer.transporter.sendMail(message, err => {
      if (err) reject(err)
      else resolve()
    })
  })
}

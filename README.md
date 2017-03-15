# Website
This is a website for my personal web server.

## Requirements
- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)

## Installation
To install this then go to releases and download a zipped version of this project.
Once its downloaded and extracted then run `npm install`.

## Configuration
To configure the application you can create a `.env` file
where you can set global environment variables.
Following values can be set (format: KEY=VALUE):

- ENV - If the application will be executed in development or production mode. (Default: *development*)
- PORT - Which port the server will listen to. (Default: *80*)
- SESSION_SECRET - This is the secret used to sign the session ID cookie.
- EMAIL_PROVIDER - Which provider to use when setting up the transporter using [Nodemailer](https://nodemailer.com/smtp/well-known/).
- EMAIL_USER - The username for authentication.
- EMAIL_PASS - The password for authentication.
- EMAIL_SENDTO - Which email address to send mail to at the contact page.

## How to run
To start the server then execute the following `node bin/www`.

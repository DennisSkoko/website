# Website
This is a website for my personal web server.

## Requirements
- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)

## Installation
To install this just download a copy of this project.
Once its downloaded and extracted then run `npm install`.

## Configuration
To configure the application you can create a `.env` file
where you can set global environment variables within the application.
Following values can be set (format: KEY=VALUE):

- **NODE_ENV** - If the application will be executed in development or production mode. (Default: *development*)
- **PORT** - Which port the server will listen to. (Default: *80*)
- **LOG_LEVEL** - The minimum log level the logger will output. (Default *info*)
- **EMAIL_PROVIDER** - Which provider to use when setting up the transporter using [Nodemailer](https://nodemailer.com/smtp/well-known/). (Default *Hotmail*)
- **EMAIL_USER** - The username for authentication. (Default *something@example.com*)
- **EMAIL_PASS** - The password for authentication. (Default *secret*)
- **EMAIL_SENDTO** - Which email address to send mail to at the contact page. (Default *receiver@example.com*)

## How to run
To start the server then execute `npm start`.

## Testing
To test the application then execute `npm test`.

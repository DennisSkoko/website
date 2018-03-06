## Installation
To install the dependencies, just execute `npm install`.

## Configuration
To configure the application you can create a `.env` file
where you can set global environment variables within the application.
Following values can be set (format: KEY=VALUE):

Key            | Default               | Description
-------------- | --------------------- | -------------
NODE_ENV       | development           | If the application will be executed in development or production mode.
HTTP_PORT      | 80                    | Which port the server will listen to.
LOG_LEVEL      | info                  | The minimum log level the logger will output.
EMAIL_PROVIDER | Hotmail               | Which provider to use when setting up the transporter using [Nodemailer](https://nodemailer.com/smtp/well-known/).
EMAIL_USER     | something@example.com | The username for authentication.
EMAIL_PASS     | secret                | The password for authentication.
EMAIL_SENDTO   | receiver@example.com  | Which email address to send mail to at the contact page.

## Building
Before you can run the application you will need to build the project.
You can read the [documentation](../client/README.md) on how to build it.

## Running
To start the server then execute `npm start`.
If you are developing you can execute `npm run start:w` instead.
Then the process will watch the files and restart whenever you edit a file.

## Testing
To test so the code follows the code style rules then execute `npm run lint`.
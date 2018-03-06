## Requirements
- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)

## Installation
To install the dependencies, just execute `npm install`

## Configuration
To configure the application you can create a `.env` file
where you can set global environment variables within the application.
Following values can be set (format: KEY=VALUE):

- **NODE_ENV** - If the application will be executed in development or production mode. (Default: *development*)
- **PORT** - Which port the server will listen to. (Default: *80*)
- **LOG_LEVEL** - The minimum log level the logger will output. (Default: *info*)

## Building
Before you can run the application you will need to build the project.
You can read the [documentation](../client/README.md) on how to build it.

## How to run
To start the server then execute `npm start`.
If you are developing you can execute `npm run start:w` instead.
Then the process will watch the files and restart whenever you edit a file.

## Testing
To test the application then execute `npm test`.

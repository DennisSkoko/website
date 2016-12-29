# Website
This is a website for my personal web server.

## Requirements
- PHP v5.6 or higher

## Installation
If you are interested on installing this on your computer then you will need [Composer](https://getcomposer.org/).
Once its installed then download the source files and run `composer install`.

### Environment
Before you start to run the application you will need to enter some configuration.
This is needed for the application to run.
First create a file with the name `.env.ini` in the project directory.
Here is a template on how the file contents should look.

```
[logger]
level="info"


[mailer]
user="email"
pass="password"

; This is for Outlook
host="smtp.live.com"
port=587
security="tls"
```

## How to run
Once everything is ready you can use PHP to run it. Just execute the following in your ternimal.
```
php -S localhost:80 -t /path/to/your/project/folder/public
```

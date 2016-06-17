# Website
This is a website for my personal web server.

## How to install
If you are interested on installing this on your computer then you will need [Composer](https://getcomposer.org/).

1. First download this project with the method of your liking (fork, clone or as a zip).
2. Place it within you htdocs/www folder. Make sure it's an environment that listens to `.htaccess` files.
3. Edit `public/.haccess` and change the *RewriteBase* so it fits your environment.
4. Within `app/Config` folder you will find the configurable files. You will need to rename the `.php.example` files to `.php`.
5. Edit `app/Config/mail.php` and fill in the values in there. (This is for the contact form).
6. Edit `app/Config/weather.php` and fill your API key from OpenWeatherMap.
7. Last step is to edit `app/bootstrap.php` and change the `Url::setPathToWebroot`. It's the same as you did in `.htaccess` file.
Just replace that with the path to your public folder.

## License
This is open-sourced software is licensed under the MIT license.


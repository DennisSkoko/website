<?php use Honth\Renderer\View; ?>
<!doctype html>
<html lang="<?= $lang ?>">
    <head>
        <meta charset="<?= $charset ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?= isset($title) ? $title . " - " : "" ?><?= $name ?></title>
        <?= View::make("Util.stylesheets", compact("stylesheets")) ?>
    </head>
    <body>
        <?= View::make("Widgets.navbar", $navbar) ?>

        <?= $main ?>

        <?= View::make("Util.javascript", compact("javascript")) ?>
    </body>
</html>
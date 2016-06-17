<?php use Honth\Renderer\View; ?>
<!doctype html>
<html lang="<?= $lang ?>">
    <head>
        <meta charset="<?= $charset ?>">
        <?= View::make("util.meta", compact("meta")) ?>
        <?= View::make("util.open-graph", compact("og")) ?>

        <title><?= isset($title) ? $title . " - " : "" ?><?= $name ?></title>
        <?= View::make("util.stylesheets", compact("stylesheets")) ?>

        <?php if (!empty($favicon)): ?>
            <link rel="shortcut icon" href="<?= \DS\Utilities\Url::make($favicon) ?>">
        <?php endif; ?>
    </head>
    <body>
        <?= View::make("widgets.navbar", $navbar) ?>

        <?php if (isset($flash)): ?>
            <?= View::make("widgets.flash", $flash) ?>
        <?php endif; ?>

        <?= isset($feature) ? $feature : null ?>

        <?= isset($main) ? $main : null ?>

        <?= View::make("widgets.footer") ?>

        <?= View::make("util.javascript", compact("javascript")) ?>
    </body>
</html>
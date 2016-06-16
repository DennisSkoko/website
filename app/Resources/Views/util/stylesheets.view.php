<?php foreach ($stylesheets as $stylesheet):
    if (filter_var($stylesheet, FILTER_VALIDATE_URL) === false) {
        $stylesheet =  \DS\Utilities\Url::make($stylesheet);
    }
    $less = strrchr($stylesheet, ".") == ".less" ? "/less" : "";
    ?>
    <link rel="stylesheet<?= $less ?>" href="<?= $stylesheet ?>">
<?php endforeach; ?>

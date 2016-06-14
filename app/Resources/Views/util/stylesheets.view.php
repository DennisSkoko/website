<?php foreach ($stylesheets as $stylesheet):
    $less = strrchr($stylesheet, ".") == ".less" ? "/less" : "";
    ?>
    <link rel="stylesheet<?= $less ?>" href="<?= $stylesheet ?>">
<?php endforeach; ?>

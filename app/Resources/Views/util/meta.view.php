<?php foreach ($meta as $name => $content): ?>
    <meta name="<?= $name ?>" content="<?= is_array($content) ? implode(",", $content) : $content ?>">
<?php endforeach; ?>

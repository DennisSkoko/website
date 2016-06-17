<?php foreach ($og as $key => $value): ?>
    <meta property="og:<?= $key ?>" content="<?= $value ?>">
<?php endforeach; ?>
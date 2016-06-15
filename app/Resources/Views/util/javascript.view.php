<?php foreach ($javascript as $script): ?>
    <script src="<?= \DS\Utilities\Url::make($script) ?>"></script>
<?php endforeach; ?>
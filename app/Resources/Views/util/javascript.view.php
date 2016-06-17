<?php foreach ($javascript as $script):
    if (filter_var($script, FILTER_VALIDATE_URL) === false) {
        $script =  \DS\Utilities\Url::make($script);
    }
    ?>
    <script src="<?= $script ?>"></script>
<?php endforeach; ?>
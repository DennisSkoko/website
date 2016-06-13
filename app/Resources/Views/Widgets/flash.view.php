<div class="container">
    <div class="panel panel-<?= isset($status) ? $status : "primary" ?>">
        <?php if (isset($title)): ?>
            <div class="panel-heading">
                <?= $title ?>
            </div>
        <?php endif; ?>
        
        <?php if (isset($body)): ?>
            <div class="panel-body">
                <?= $body ?>
            </div>
        <?php endif; ?>

        <?php if (isset($footer)): ?>
            <div class="panel-footer">
                <?= $footer ?>
            </div>
        <?php endif; ?>
    </div>
</div>
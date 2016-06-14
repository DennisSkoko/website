<div class="widget well well-sm">
    <?php if ($weather !== null): ?>
        <div class="row">
            <div class="col-sm-7">
                <h3><?= $weather->city->name ?>, <?= $weather->city->country ?></h3>
                <img src="<?= $weather->weather->getIconUrl() ?>"><span><?= $weather->weather->description ?></span>
            </div>
            <div class="col-sm-5 text-right">
                <p class="h3"><?= $weather->temperature->getFormatted() ?></p>
                <p>Humidity: <?= $weather->humidity->getFormatted() ?></p>
                <p>Wind: <?= $weather->wind->speed->getFormatted() ?></p>
            </div>
        </div>
    <?php else: ?>
        <h2>Weather Unavailable</h2>
    <?php endif; ?>
</div>
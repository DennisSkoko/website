<div class="weather well well-sm">
    <?php if ($weather !== null): ?>
        <div class="row">
            <div class="col-sm-7">
                <h3><?= $weather->city->name ?>, <?= $weather->city->country ?></h3>
                <p>
                    <span class="wi wi-<?= $weather->weather->icon ?>"></span>
                    <span><?= $weather->weather->description ?></span>
                </p>
            </div>
            <div class="aside col-sm-5">
                <p class="h3"><?= $weather->temperature->now->getFormatted() ?></p>
                <p>Humidity: <?= $weather->humidity->getFormatted() ?></p>
                <p>Wind: <?= $weather->wind->speed->getFormatted() ?></p>
            </div>
        </div>
    <?php else: ?>
        <h2>Weather Unavailable</h2>
    <?php endif; ?>
</div>
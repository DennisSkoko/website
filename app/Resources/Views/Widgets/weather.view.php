<div class="widget">
    <img src="<?= $weather->weather->getIconUrl() ?>" alt="<?= $weather->weather->description ?>">
    <h3><?= $weather->weather->description ?></h3>
    <?= $weather->city->name ?>
</div>
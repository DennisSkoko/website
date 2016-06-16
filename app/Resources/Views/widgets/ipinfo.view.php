<div class="ipinfo text-center">
    <h2><?= $ipinfo->getIp() ?></h2>
    <img style="border-radius: 50%" src="https://maps.googleapis.com/maps/api/staticmap?center=<?= $ipinfo->getLoc() ?>&zoom=10&size=200x200&sensor=false">

    <h2>
        <?= $ipinfo->getCity() !== null ? $ipinfo->getCity() : "City not available" ?><?= $ipinfo->getCountry() !== null ? ", " . $ipinfo->getCountry() : null ?>
    </h2>

    <?php if ($ipinfo->getOrg() !== null): ?>
    <p><?= $ipinfo->getOrg() ?></p>
    <?php endif; ?>

    <?php if ($ipinfo->getPostal() !== null): ?>
        <p>Postal: <?= $ipinfo->getPostal() ?></p>
    <?php endif; ?>
</div>
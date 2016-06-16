<div class="ipinfo text-center">
    <h2><?= $ipinfo->getIp() ?></h2>
    <img
        style="border-radius: 50%"
        src="https://maps.googleapis.com/maps/api/staticmap?center=<?= $ipinfo->getLoc() ?>&amp;zoom=10&amp;size=200x200&amp;sensor=false"
        alt="A map from Google with the following coordinates: <?= $ipinfo->getLoc() ?>"
    >

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
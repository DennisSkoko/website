<div class="ipinfo text-center">
    <h2><?= $ipinfo["ip"] ?></h2>
    <img style="border-radius: 50%" src="https://maps.googleapis.com/maps/api/staticmap?center=<?= $ipinfo["loc"] ?>&zoom=10&size=200x200&sensor=false">
    <h2><?= $ipinfo["city"] ?>, <?= $ipinfo["country"] ?></h2>
    <p><?= $ipinfo["org"] ?></p>
    <p>Postal: <?= $ipinfo["postal"] ?></p>
</div>
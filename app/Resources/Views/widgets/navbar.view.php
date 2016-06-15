<nav class="navbar navbar-default navbar-static-top">
    <div class="container">

        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-menu" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="<?= \DS\Utilities\Url::make("/") ?>"><?= $header ?></a>
        </div>

        <div class="collapse navbar-collapse" id="collapse-menu">
            <ul class="nav navbar-nav navbar-right">
                <?php foreach ($links as $link):
                    $selected = $link["url"] == $_SERVER["REQUEST_URI"] ? "active" : "";
                    ?>
                    <li class="<?= $selected ?>"><a href="<?= $link["url"] ?>"><?= $link["text"] ?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
</nav>
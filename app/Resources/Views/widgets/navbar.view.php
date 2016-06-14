<nav class="navbar navbar-default navbar-static-top">
    <div class="container">

        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-menu" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"><?= $header ?></a>
        </div>

        <div class="collapse navbar-collapse" id="collapse-menu">
            <ul class="nav navbar-nav navbar-right">
                <?php foreach ($links as $link): ?>
                    <li><a href="<?= $link["url"] ?>"><?= $link["text"] ?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
</nav>
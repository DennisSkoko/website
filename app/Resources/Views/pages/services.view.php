<?php use DS\Utilities\Url; ?>
<div class="container">
    <ul class="row services-all">
        <div class="col-lg-8 col-lg-push-2">

            <li class="col-sm-4">
                <a href="<?= Url::make("service/weather") ?>">
                    <span class="glyphicon glyphicon-cloud"></span>
                    <h3>Weather</h3>
                </a>
            </li>

            <li class="col-sm-4">
                <a href="<?= Url::make("service/ipinfo") ?>">
                    <span class="glyphicon glyphicon-info-sign"></span>
                    <h3>IP Info</h3>
                </a>
            </li>

            <li class="col-sm-4">
                <a href="<?= Url::make("service/calendar") ?>">
                    <span class="glyphicon glyphicon-calendar"></span>
                    <h3>Calendar</h3>
                </a>
            </li>

        </div>
    </ul>
</div>
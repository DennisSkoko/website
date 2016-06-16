<?php use DS\Utilities\Url; ?>
<div class="container">
    <div class="col-md-6 col-md-push-3">
        <ul class="row services-all">

            <li class="col-sm-6">
                <a href="<?= Url::make("service/ipinfo") ?>">
                    <span class="glyphicon glyphicon-info-sign"></span>
                    <h3>IP Info</h3>
                </a>
            </li>

            <li class="col-sm-6">
                <a href="<?= Url::make("service/calendar") ?>">
                    <span class="glyphicon glyphicon-calendar"></span>
                    <h3>Calendar</h3>
                </a>
            </li>

        </ul>
    </div>
</div>
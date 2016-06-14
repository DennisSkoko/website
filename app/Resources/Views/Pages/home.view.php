<?php use Honth\Renderer\View; ?>
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <pre><?php var_dump($weather) ?></pre>
        </div>
        <div class="col-md-4">
            <?= View::make("widgets.weather", compact("weather")) ?>
        </div>
    </div>

</div>
<div class="container">
    <div class="calendar">
        <h2><?= $calendar->getYear() ?> - <?= $calendar->getMonthAsText() ?></h2>

        <ul class="weeks">
            <?php foreach ($calendar->getWeeks() as $week): ?>
                <li>
                    <?= $week->getNumber() ?>
                    <ul class="days">
                        <?php foreach ($week->getDays() as $day): ?>
                            <li><?= $day->format("Y-m-d H:i:s") ?></li>
                        <?php endforeach; ?>
                    </ul>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>
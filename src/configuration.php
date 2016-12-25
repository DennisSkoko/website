<?php
/**
 * Import the configuration
 *
 * @var array $config
 */

use DS\Utilities\Path;

$config = require Path::make(['config'], 'app.php');

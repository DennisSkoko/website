<?php

global $app;

session_name($app->getContainer()->get("settings")["session"]["name"]);
session_start();

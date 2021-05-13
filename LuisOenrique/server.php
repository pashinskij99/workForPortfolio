<?php
$_POST = json_decode(file_get_contents("php"), true);
echo var_dump($_POST);
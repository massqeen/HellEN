<?php

$recepient = "trancemanjake@gmail.com";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);
$message = "Имя: $name \nТелефон: $tel";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

<?php
$fio = $_POST['name'];
$phone = $_POST['phone'];
$email = 'dushez@yandex.ru';
$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$phone = urldecode($phone);
$email = urldecode($email);
$fio = trim($fio);
$phone = trim($phone);
$email = trim($email);
?>
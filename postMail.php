<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = 'dushez@yandex.ru';
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);
$name = trim($name);
$phone = trim($phone);
$email = trim($email);

mail("vladleonchik@mail.ru", "Заказ с сайта", "Имя:".$name.". E-mail: ".$email ,"From: Владислав \r\n");
?>

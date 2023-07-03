<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$ml = $_POST['ml'];
$price = $_PO	ST['price'];
$token = "";
$chat_id = "";
$arr = array(
	'Новый заказ.'
  'Товары: ' => $name,
  'Объем: ' => $ml,
  'Цены' => $price
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
	echo "ready";
} else {
  echo "Error";
}
?>
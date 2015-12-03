<?php

$message = "Name: " . $_POST["contact-name"] . "\r\n\r\nEmail: " . $_POST["contact-email"] . "\r\n\r\nComment:\r\n" . $_POST["contact-message"];
$headers = "From: no-reply@sage-iq.com\r\n" . "Reply-To: " . $_POST["contact-email"];

$rv = mail('info@sage-iq.com', 'Sage IQ Contact Form', $message, $headers);

header('Content-Type: text/plain');
echo $rv;

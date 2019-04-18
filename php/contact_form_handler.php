<?php

$mailTo = "admin@brostack.net";    
$subject = $_POST['subject'];
$name = $_POST['name'];
$message = $_POST['message'];
$from = $_POST['email'];

$email_message = "You have recieved a new email from $name. \n\n $message";

$headers = "From: $from";

mail($mailTo, $subject, $email_message, $headers);
header("Location: ../index.html");

?>
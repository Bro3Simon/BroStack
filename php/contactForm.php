<?php

if (isset($_POST['submit'])) {
$mailTo = "bro3simon@gmail.com";    
$subject = $_POST['subject'];
$message = "You have received an email from "$_POST['name'] "./n/n" $_POST['message'];
$headers = "From: ".$_POST['email'];

mail($mailTo, $subject, $message, $headers);
header("Location: index.html");
}

?>
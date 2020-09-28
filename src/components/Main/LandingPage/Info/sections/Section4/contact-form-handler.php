<?php
if(isset($_POST['submit'])){
$name=$_POST['name'];
$visitor_email=$_POST['email'];
$message=$_POST['message']


$email_to="simona_hriscu@yahoo.com";
$email_subject='New form submission';
$headers="From: $visitor_email \r\n";
$txt= "You have received an e-mail from: $name \n\n".$message;

mail($email_to,$email_subject, $headers, $txt);
header("Location: Section4.jsx")
}
?>
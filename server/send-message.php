<?php 
include "model.php";
$model = new model();
$to = $model->security($_POST['receiver']);
$message = $model->security($_POST['message-value']);
session_start();
$username = $_SESSION['username'];
echo $model->send_message($message,$to,$username);
	

?>
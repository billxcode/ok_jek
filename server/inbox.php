<?php 
include "model.php";
$model = new model();
session_start();
$username = $_SESSION['username'];
echo $model->get_message_inbox($username);
?>
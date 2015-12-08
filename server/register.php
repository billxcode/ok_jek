<?php 
include "model.php";
$model = new model();
$username = $model->security($_POST['username']);
$password = $model->security($_POST['password']);
echo $model->register($username,$password);
?>
<?php 
include "model.php";
$model = new model();
$username = $model->security($_POST['username']);
$password = $model->security($_POST['password']);
$result = $model->login($username,$password);
if($result=="success"){
	session_start();
	$_SESSION['username']= $username;
	$_SESSION['password']= $password;
}
echo $result;
?>
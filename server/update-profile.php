<?php 

include "model.php";
$model = new model();
$photo = $model->security($_FILE['file']);
$firstname = $model->security($_POST['firstname']);
$lastname = $model->security($_POST['lastname']);
$email = $model->security($_POST['email']);
session_start();
$username = $_SESSION['username'];
echo $model->update_profile($firstname,$lastname,$email,$username);

?>
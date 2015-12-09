<?php 
session_start();
if(!empty($_SESSION['username'])){
	echo "login";
}else{
	echo "logout";
	session_destroy();
}


?>

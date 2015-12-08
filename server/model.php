<?php 
/**
* 
*/
class model
{
	private $connect="";
	function __construct()
	{
		$this->connect = mysqli_connect("localhost","root","","ok_jek") or die(mysqli_error());
	}
	public function security($param){
		return htmlspecialchars(htmlentities(stripslashes(strip_tags($param))));
	}
	public function result($param,$type){
		if($type=="select"){
			if(mysqli_num_rows($param)>0){
				return "success";
			}else{
				return "failed";
			}
		}else if($type=="insert"){
			if($param){
			return "success";
			}else{
			return "failed";
			}
		}
	}
	public function parse_data($sql){
		$data=array();
		while($row=mysqli_fetch_array($sql)){
			$data[]=$row;
		}
		return json_encode($data);
	}
	public function register($username,$password){
		$sql = mysqli_query($this->connect,"INSERT INTO `Authentification`(`Username`, `Password`) VALUES ('$username','$password')") or die(mysqli_error($this->connect));
		return $this->result($sql,"insert");
	}
	public function login($username,$password){
		$sql = mysqli_query($this->connect,"SELECT `idAuthentification` FROM `Authentification` WHERE `Username`='$username' and `Password`='$password'") or die(mysqli_error($this->connect));
		return $this->result($sql,"select");
	}
	public function get_message_inbox($myaccount){
		$sql = mysqli_query($this->connect,"SELECT `Value_Message`,`Username` FROM `Message`, `Authentification` WHERE Message.auth_id=Authentification.idAuthentification and `receiver`='$myaccount' ORDER BY `idMessage` DESC") or die(mysqli_error($this->connect));
		return $this->parse_data($sql);
	}
	public function get_message_sent($myaccount){
		$sql = mysqli_query($this->connect,"SELECT `Value_Message` FROM `Message` WHERE `auth_id`=(SELECT `idAuthentification` FROM `Authentification` WHERE `Username`='$myaccount') ORDER BY `idMessage` DESC") or die(mysqli_error($this->connect));
		return $this->parse_data($sql);
	}
	public function send_message($message,$to,$sender){
		$sql = mysqli_query($this->connect,"INSERT INTO `Message`(`Receiver`, `Value_Message`, `auth_id`) VALUES ('$to','$message',(SELECT `idAuthentification` FROM `Authentification` WHERE `Username`='$sender'))") or die(mysqli_error($this->connect));
		return $this->result($sql,"insert");
	}
	public function contact_driver(){
		$sql = mysqli_query($this->connect,"SELECT `idAuthentification`, `Username` FROM `Authentification` WHERE 1") or die(mysqli_error($this->connect));
		return $this->parse_data($sql);
	}
	function __destruct(){
		mysqli_close($this->connect);
	}
}


?>
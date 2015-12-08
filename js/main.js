function check_value(){
	if($("#form-register input").val()==""){
		alert("you must fill the blank text");
	}
}
$(function(){
	$.get("server/check_session.php",function(){
		
	});
		$("#form-register").hide();
		$("#btn-register").on("click",function(){
			alert("hello");
			var $form_reg = $("#form-register").serialize();
			$.post("server/register.php",$form_reg,function(data,success){
				alert(data);
			});
		});
		$("#btn-login").on("click",function(){
			var $form_log = $("#form-login").serialize();
			$.post("server/login.php",$form_log,function(data,success){
				if(data=="success"){
					window.location="dashboard";
				}else{
					alert(data);
				}
			});
		});
		$("#btn-show-register").on("click",function(){
			$("#form-register").toggle();
		});
	});
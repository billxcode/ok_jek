$(function(){
	$.get("../server/check_session.php",function(data){
		if(data=="login"){
			alert("session success");
		}else if(data=="logout"){
			window.location="../index.html";
		}
	});
	$.get("../server/contact.php",function(data){
		var obj = JSON.parse('{"data_contact":'+data+'}');
		for(var i=0;i<obj.data_contact.length;i++){
			$("#contact-driver").append("<input type='radio' name='driver' value='"+obj.data_contact[i].Username+"'>"+obj.data_contact[i].Username+"<br>");
		}
	});
	$("#message").slideUp();
	$("#send-message").hide();
	$("#btn-show-home").on("click",function(){
		window.location = "index.html";
	});
	$("#btn-show-message").on("click",function(){
		$("#message").toggle(300);
	});
	$("#btn-send-message").on("click",function(){
		var $value = $("#message-value").val()+"<br>";
		$("#send-message").append("You : "+$value);
		var $form_msg = $("#form-message").serialize();
		$.post("../server/send-message.php",$form_msg,function(data,success){
			if(data=="success"){
				$("#result-send-message").html("success");
			}else if(data=="failed"){
				$("#result-send-message").html("failed");
			}else{
				$("#result-send-message").html(data);
			}
			$("#send-message").show();
		});
	});
	$("#btn-inbox").on("click",function(){
	$("#receive-message").html("");
		$.get("../server/inbox.php",function(data){
			var obj = JSON.parse('{"data_inbox":'+data+'}');
			for(var i=0;i<obj.data_inbox.length;i++){
				$receive = obj.data_inbox[i].Username+" : "+obj.data_inbox[i].Value_Message+"<br>";
				$("#receive-message").append($receive);
			}
			$("#receive-message").show();
			$("#send-message").hide();
		});
	});
	$("#btn-sent").on("click",function(){
		$("#send-message").html("");
		$.get("../server/sent.php",function(data){
			var obj = JSON.parse('{"data_sent":'+data+'}');
			for(var i=0;i<obj.data_sent.length;i++){
				$("#send-message").append("You : "+obj.data_sent[i].Value_Message+"<br>");
			}
			$("#send-message").show();
	$("#receive-message").hide();
		});
	});
	$("#btn-logout").on("click",function(){
		$.get("../server/logout.php",function(data){
			if(data=="success"){
				window.location="../";
			}
		});	
	});
});
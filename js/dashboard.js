function mention(namadriver){
	$("#receiver").val(namadriver);
}
function getInbox(){
	$.get("../server/inbox.php",function(data){
			var obj = JSON.parse('{"data_inbox":'+data+'}');
			for(var i=0;i<obj.data_inbox.length;i++){
				$receive = obj.data_inbox[i].Username+" : "+obj.data_inbox[i].Value_Message+"<br>";
				$("#receive-message").append("<div class='msg-bar'>"+$receive+"</div>");
			}
			$("#receive-message").show();
		});
}
function getSent(){
	$.get("../server/sent.php",function(data){
			var obj = JSON.parse('{"data_sent":'+data+'}');
			for(var i=0;i<obj.data_sent.length;i++){
				$("#send-message").append("<div class='msg-bar'>You : "+obj.data_sent[i].Value_Message+"</div>");
			}
			$("#send-message").show();	
		});
}
$(function(){
	getInbox();
	getSent();
	$.get("../server/check_session.php",function(data){
		if(data=="logout"){
			window.location="../index.html";
		}else if(data=="login"){

		}else{
			alert("server error!!");
		}
	});
	$.get("../server/contact.php",function(data){
		var obj = JSON.parse('{"data_contact":'+data+'}');
		for(var i=0;i<obj.data_contact.length;i++){
			$("#contact-driver").append("<a href='#'><div class='list-driver' onclick=mention(\""+obj.data_contact[i].Username+"\")>"+obj.data_contact[i].Username+"</div></a>");
		}
	});
	$("#btn-show-profile").on("click",function(){
		window.location = "../profile/";
	});
	$("#btn-show-home").on("click",function(){
		window.location = "../dashboard/";
	});
	$("#btn-show-message").on("click",function(){
		window.location = "../message/";
	});
	$("#btn-show-video").on("click",function(){
		window.location = "../videostreaming/";
	});

	$("#btn-send-message").on("click",function(){
		var $value = $("#message-value").val()+"<br>";
		$("#send-message").append("<div class='msg-bar'>You : "+$value+"</div>");
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
		getInbox();
	});
	$("#btn-sent").on("click",function(){
		$("#send-message").html("");
		getSent();
	});
	$("#btn-logout").on("click",function(){
		$.get("../server/logout.php",function(data){
			if(data=="success"){
				window.location="../";
			}
		});	
	});
	$("#btn-update-profile").on("click",function(){
		var $dataprofile = $("#form-update-profile").serialize();
		$.post("../server/update-profile.php",$dataprofile,function(data,success){
			alert(data);
		});
	});
});
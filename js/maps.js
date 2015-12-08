var lat;
var lng;
function geolocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			lat = position.coords.latitude;
			lng = position.coords.longitude;
			var options = {
		center : new google.maps.LatLng(lat,lng),
		zoom:9,
		MapType:google.maps.MapTypeId.SATELLITE
	}
	new google.maps.Map(document.getElementById("maps"),options);
		});
	}
}

$(function(){
geolocation();
});
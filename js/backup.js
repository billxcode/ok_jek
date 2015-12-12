var lat;
var lng;
var map;
var marker;
function geolocation(){
	// var bounds = new google.maps.LatLngBounds();
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			lat = position.coords.latitude;
			lng = position.coords.longitude;
			var options = {
		center : google.maps.LatLng(lat,lng),
		zoom:15,
		MapType:google.maps.MapTypeId.ROADMAP
	}
	new google.maps.Map(document.getElementById("maps"),options);
		});
	/*	marker = new google.maps.Marker({
            position: position1,
        });*/
	}


}



function mapDefault(){

if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			lat = position.coords.latitude;
			lng = position.coords.longitude;
			var opsi = {
		center : new google.maps.LatLng(lat,lng),
		zoom:15,
		MapType: google.maps.MapTypeId.ROAD,
  	mapTypeControl: false,

	}
	map = new google.maps.Map(document.getElementById("maps"),opsi);
	$.get("../server/get_latlng.php",function(data){
		var obj = JSON.parse('{"data":'+data+"}");
		for(var i=0;i<obj.data.length;i++){
		marker = new google.maps.Marker({
		draggable:true,
		// icon:"http://orig04.deviantart.net/4d21/f/2014/161/8/2/cloud_pixel_avatar__animated___50x50__by_darkfox98-d7lw8ou.gif",
		position : new google.maps.LatLng(obj.data[i].latitude,obj.data[i].longitude),
		map : map
	});

		var infowindow = new google.maps.InfoWindow({
		content: obj.data[i].jalan_nama+" -> Los Pagi : "+obj.data[i].los_pagi+" , Los Siang : "+obj.data[i].los_siang
	});

	infowindow.open(map,marker);
	
		}
	});
	
});
}
}





/*
    var markers = [
        ['Merjosari', -7.98127,112.626],
        ['Tong', -7.98045,112.625],
        ['Perempatan ITN', -7.98159,112.625],
        ['Sardo', -7.98165,112.624],
        ['Sigura-gura', -7.97717,112.634],
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>London Eye</h3>' +
        '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>Palace of Westminster</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>']
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

    }


*/

$(function(){
mapDefault();
});
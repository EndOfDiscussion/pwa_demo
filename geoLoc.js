// gets the current location
function getLocation() {
	if( navigator.geolocation ) {
		var options = {
			enableHighAccuracy: true,
		}
		navigator.geolocation.getCurrentPosition(initMap, showError, options);
	} else {
		consol.log( "Geo Location not supported by browser" );
	}
}
// if user has no internet, or disabled gps or what ever then show a message.
function showError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED:
			loc.innerHTML = "User denied the request for Geolocation."
			break;
		case error.POSITION_UNAVAILABLE:
			loc.innerHTML = "Location information is unavailable."
			break;
		case error.TIMEOUT:
			loc.innerHTML = "The request to get user location timed out."
			break;
		case error.UNKNOWN_ERROR:
			loc.innerHTML = "An unknown error occured."
			break;
	}
}

// creates google maps in map div, and displays a marker on the current possition
function initMap(position) {
	var pos = {lat: position.coords.latitude, lng: position.coords.longitude}
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: pos
	});
	var marker = new google.maps.Marker({
		position: pos,
		map: map
	})
}

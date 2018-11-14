function getLocation() {
	if( navigator.geolocation ) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		consol.log( "Geo Location not supported by browser" );
	}
}

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


var loc = document.getElementById("loc");

function showPosition(position) {
	var location = {
		Latitude: position.coords.latitude,
		Longitude: position.coords.longitude
	}

	console.log(location)
	loc.innerHTML = "Latitiude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
getLocation()

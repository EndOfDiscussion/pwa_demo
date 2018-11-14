function getLocation() {
	if( navigator.geolocation ) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		consol.log( "Geo Location not supported by browser" );
	}
}

function showPosition(position) {
	var location = {
		Latitude: position.coords.latitude,
		Longitude: position.coords.longitude
	}

	console.log(location)
}

getLocation();

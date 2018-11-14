function getLocation() {
	if( navigator.geolocation ) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		consol.log( "Geo Location not supported by browser" );
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

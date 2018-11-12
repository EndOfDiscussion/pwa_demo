
// detect if device is on iOS
function isIos() {
	return ['iPhone', 'iPad', 'iPod'].includes(navigator.platform);
}

// detect if device is in standalone mode
function isInStandaloneMode() {
	if ( 'standalone' in window.navigator && window.navigator.standalone ){
		return true;
	}
	return false;
}

if ( isIos() == true && isInStandaloneMode() == false) {
	document.getElementById('banner').style.display = "block";
}

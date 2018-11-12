
// detect if device is on iOS
function isIos() {
	return ['iPhone', 'iPad', 'iPod'].includes(navigator.platform);
}

// // detect if device is in standalone mode
// const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
//
// const showInstallMessage;
// // display popup message
// if (isIos() && !isInStandaloneMode()) {
// 	this.setState({ showInstallMessage: true });
// }

if ( isIos() == true ) {
	document.getElementById('banner').style.display = "block";
}

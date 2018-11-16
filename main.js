// checks for servic worker brwoser support
// when the browser does support register a new service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('OneSignalSDKWorker.js').then(() => {
		console.log('[Service Worker] Successfully registered')
	})
}

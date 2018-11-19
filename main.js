// checks for servic worker brwoser support
// when the browser does support register a new service worker
window.isUpdateAvailable = new Promise(function(resolve, reject) {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('OneSignalSDKWorker.js')
			.then(reg => {
				console.log('[Service Worker] Successfully registered')
				reg.onupdatefound = () => {
					const installingWorker = reg.installing;
					installingWorker.onstatechange = () => {
						switch (installingWorker.state) {
							case 'installed':
								if (navigator.serviceWorker.controller) {
									// new update available
									resolve(true);
								} else {
									// no update available
									resolve(false);
								}
								break;
						}
					};
				};
			})
			.catch(err => console.error('[SW ERROR]', err));
	}
});


window['isUpdateAvailable']
	.then(isAvailable => {
		if (isAvailable) {
			const toast = this.toastCtrl.create({
				message: 'New Update available! Reload the webapp to see the latest juicy changes.',
				position: 'bottom',
				showCloseButton: true,
			});
			toast.present();
		}
	});

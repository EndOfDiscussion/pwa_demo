const cacheName = 'first-cache'
const cacheAssets = [
	'/pwa_demo/',
	'/pwa_demo/index.html',
	'/pwa_demo/about.html',
	'/pwa_demo/main.css',
	'/pwa_demo/main.js',
	'/pwa_demo/ios_popup.js',
	'/pwa_demo/geoLoc.js',
	'/pwa_demo/manifest.json',
	'/pwa_demo/public/img/random.png',
	'/pwa_demo/public/img/icons/android-chrome-192x192.png',
	'/pwa_demo/public/img/icons/apple-touch-icon-152x152.png',
	'/pwa_demo/public/img/icons/apple-touch-icon-76x76.png',
	'/pwa_demo/public/img/icons/favicon-32x32.png',
	'/pwa_demo/public/img/icons/safari-pinned-tab.svg',
	'/pwa_demo/public/img/icons/android-chrome-512x512.png',
	'/pwa_demo/public/img/icons/apple-touch-icon-180x180.png',
	'/pwa_demo/public/img/icons/apple-touch-icon.png',
	'/pwa_demo/public/img/icons/msapplication-icon-144x144.png',
	'/pwa_demo/public/img/icons/apple-touch-icon-120x120.png',
	'/pwa_demo/public/img/icons/apple-touch-icon-60x60.png',
	'/pwa_demo/public/img/icons/favicon-16x16.png',
	'/pwa_demo/public/img/icons/mstile-150x150.png',
]

// When the install event gets triggered then write to console and cache resources
self.addEventListener('install', event => {
	console.log('[Service ´Worker] Installing and caching assets')

	event.waitUntil(
		caches.open(cacheName).then(cache => {
			console.log('[Service Worker] Caching assets...')
			console.table(cacheAssets)

			cache.addAll(cacheAssets)
		}).then(
			() => self.skipWaiting()
		).catch(
			err => console.error(err)
		)
	)
})

// When the fetch event gets triggered
// check if the requested url matches an already cachedrequest
// When the request is already cached, then it loads the cached url
self.addEventListener('fetch', event => {
	console.log('[Service Worker] Checking if request is cached')

	event.respondWith(
		caches.open(cacheName).then(cache => {
			return cache.match(event.request).then(response => {
				return response || fetch(event.request).then(response => {
					console.log('[Service Worker] Caching requrest')
					cache.put(event.request, response.clone())

					return response
				}).catch(
					err => console.error(err)
				)
			}).catch(
				err => console.error(err)
			)
		}).catch(
			err => console.error(err)
		)
	)
})

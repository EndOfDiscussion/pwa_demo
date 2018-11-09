const cacheName = 'v1.0.0'
const cacheAssets = [
	'/',
	'/index.html',
	'/src/main.js',
	'/manifest.json',
	'/src/main.css',
	'/public/img/random.png',
	'/public/img/icons/android-chrome-192x192.png',
	'/public/img/icons/apple-touch-icon-152x152.png',
	'/public/img/icons/apple-touch-icon-76x76.png',
	'/public/img/icons/favicon-32x32.png',
	'/public/img/icons/safari-pinned-tab.svg',
	'/public/img/icons/android-chrome-512x512.png',
	'/public/img/icons/apple-touch-icon-180x180.png',
	'/public/img/icons/apple-touch-icon.png',
	'/public/img/icons/msapplication-icon-144x144.png',
	'/public/img/icons/apple-touch-icon-120x120.png',
	'/public/img/icons/apple-touch-icon-60x60.png',
	'/public/img/icons/favicon-16x16.png',
	'/public/img/icons/mstile-150x150.png',
]

// When the install event gets triggered then write to console and cache resources
self.addEventListener('install', event => {
	console.log('[Service Worker] Installing and caching')
	
	event.waitUntil(
		caches.open(cacheName).then(cache => {
			console.log('[Service Worker] Caching following files:')
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
	console.log('[Service Worker] Checking if requested URL is cached...')

	event.respondWith(
		caches.open(cacheName).then(cache => {
			return cache.match(event.request).then(response => {
				return response || fetch(event.request).then(response => {
					console.log('[Service Worker] Fetched URL')
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

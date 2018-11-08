const filesToCache = [
	'./index.html',
]

const staticCacheName = 'first-cache'

// When the install event gets triggered then write to console and cache resources
self.addEventListener('install', event => {
	console.log('Attempting to install service worker and cache static assets')

	event.waitUntil(
		caches.open(staticCacheName).then(
			cache => cache.addAll(filesToCache)
		).then(
			() => self.skipWaiting()
		)
	)
})

// When the fetch event gets triggered
// check if the requested url matches an already cachedrequest
// When the request is already cached, then it loads the cached url
self.addEventListener('fetch', event => {
	if (event.request) console.log(event.request.url)
	else console.log('event.request does not exist --', event)

	event.respondWith(
		caches.match(event.request).then(response => {
			return response || fetch(event.request)
		})
	)
})

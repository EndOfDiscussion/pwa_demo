const filesToCache = [
	'./index.html',
	'./main.css',
	'./main.js',
	'./random.png',
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
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(staticCacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

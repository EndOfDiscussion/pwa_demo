const filesToCache = [
    'index.html',
    'main.css',
    'random.png',
    'main.js',
    'public/',
]

const staticCacheName = 'first-cache'

// when installevent is triggered write to console, then open cache and write the file to it
self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker and cache static assets')

    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            return cache.addAll(filesToCache)
        })
    )
})

// fetchevent is triggered when the site sends a new request, then opens cach and see if request url matches a cached site. If so respond with the cached site, otherwise fetch from server
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    )
});

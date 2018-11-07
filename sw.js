// caching the files in that constante
const filesToCache = [
    '/',
    'index.html',
    'main.css',
    'random.png',
    'main.js',
]
// i think it is the name of the cache we'll see later
const staticCacheName = 'first-cache'

// when install event is triggered write to console, then open cache with name staticCacheName and write the file to it
self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker and cache static assets')

    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            return cache.addAll(filesToCache)
        })
    )
})

// fetchevent is triggered when the site sends a new request, then opens cach and see if request url matches a caches site. If so respond with the caches site, otherwise fetch from server
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    )
});

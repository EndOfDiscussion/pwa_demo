// checks for ServicWorker support in brwoser, then registers the sw and install event is triggered
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function() {
        console.log("Service Worker Registered")
    });
}

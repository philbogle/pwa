const CACHE_NAME = 'reunion-pwa-cache-v1';
const urlsToCache = [
    '/pwa/index.html',
    '/pwa/css/styles.css',
    '/pwa/js/app.js',
    '/pwa/image/schild-192.jpg',
    '/pwa/image/schild-512.jpg',
    '/pwa/image/Fontana-Cabin-Map-2024.jpg',
    '/pwa/manifest.json'
    // Add paths to other assets like images or fonts here
];

// Install event - cache files
/*
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting(); // Force the waiting service worker to become the active service worker
});
*/

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim(); // Take control of all clients immediately
});

// Fetch event - serve cached files if offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

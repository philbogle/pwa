const CACHE_NAME = 'reunion-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/app.js',
    '/manifest.json'
    // Add paths to other assets like images or fonts here
];

// Install event - cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
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
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav ul.nav');
    const scheduleLink = document.getElementById('schedule-link');
    const cabinsLink = document.getElementById('cabins-link');
    const scheduleSection = document.getElementById('schedule');
    const cabinsSection = document.getElementById('cabins');

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    scheduleLink.addEventListener('click', () => {
        scheduleSection.classList.add('active');
        cabinsSection.classList.remove('active');
        nav.classList.remove('active');
    });

    cabinsLink.addEventListener('click', () => {
        cabinsSection.classList.add('active');
        scheduleSection.classList.remove('active');
        nav.classList.remove('active');
    });

    // Show schedule by default
    scheduleSection.classList.add('active');
});

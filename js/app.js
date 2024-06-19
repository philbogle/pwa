document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const scheduleLink = document.getElementById('schedule-link');
    const cabinsLink = document.getElementById('cabins-link');
    const scheduleSection = document.getElementById('schedule');
    const cabinsSection = document.getElementById('cabins');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    scheduleLink.addEventListener('click', () => {
        scheduleSection.classList.add('active');
        cabinsSection.classList.remove('active');
        navMenu.classList.remove('active');
    });

    cabinsLink.addEventListener('click', () => {
        cabinsSection.classList.add('active');
        scheduleSection.classList.remove('active');
        navMenu.classList.remove('active');
    });

    // Show schedule by default
    scheduleSection.classList.add('active');

    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/pwa/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed: ', error);
            });
    }
});

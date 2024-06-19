document.addEventListener('DOMContentLoaded', () => {

    const mapLink = document.getElementById('map-link');
    const mapPopup = document.getElementById('map-popup');
    const closeMapBtn = document.getElementById('close-map');

    mapLink.addEventListener('click', () => {
        mapPopup.style.display = 'flex';
        scheduleSection.classList.remove('active');
        cabinsSection.classList.remove('active');
        navMenu.classList.remove('active');
    });

    closeMapBtn.addEventListener('click', () => {
        mapPopup.style.display = 'none';
    });


    /*


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
    */
});


// Function to force stop and reload the service worker
function forceUpdateServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations()
            .then(registrations => {
                registrations.forEach(registration => {
                    registration.unregister();
                });
                window.location.reload();
            });
    }
}

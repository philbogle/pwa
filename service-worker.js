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

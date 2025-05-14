//El collapse del nav
const toggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    toggle.classList.toggle('active');
});


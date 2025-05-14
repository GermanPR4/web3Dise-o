// IR CAMBIANDO LAS IMAGENES DEL CAROUSEL
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

function showNextImg() {
    images[currentIndex].classList.remove('active-img');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active-img');
}

function showPrevImg() {
    images[currentIndex].classList.remove('active-img');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active-img');
}

rightArrow.addEventListener('click', showNextImg);
leftArrow.addEventListener('click', showPrevImg);
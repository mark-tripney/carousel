const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const btnPrev = document.getElementById('carousel-btn-prev');
const btnNext = document.getElementById('carousel-btn-next');

btnPrev.addEventListener('click', moveToPrevSlide);
btnNext.addEventListener('click', moveToNextSlide);

function moveToPrevSlide() {
  slides[slidePosition].classList.remove('carousel-item-visible');
  slidePosition === 0
    ? (slidePosition = totalSlides - 1)
    : (slidePosition -= 1);
  slides[slidePosition].classList.add('carousel-item-visible');
}

function moveToNextSlide() {
  slides[slidePosition].classList.remove('carousel-item-visible');
  slidePosition === totalSlides - 1
    ? (slidePosition = 0)
    : (slidePosition += 1);
  slides[slidePosition].classList.add('carousel-item-visible');
}


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }

    slider.style.transform = `translateX(-${currentIndex * 400}px)`;
}

nextButton.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

showSlide(currentIndex);

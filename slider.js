let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slideWidth = document.querySelector('.slider img').clientWidth;
    const newPosition = -index * slideWidth;
    slider.style.transform = `translateX(${newPosition}px)`;
    currentIndex = index;
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = document.querySelectorAll('.slider img').length - 1;
    }
    showSlide(currentIndex);
}



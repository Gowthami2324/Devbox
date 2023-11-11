/*let currentIndex1 = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider1');
    const slideWidth = document.querySelector('.slider1 img').clientWidth;
    const newPosition = -index * slideWidth;
    slider.style.transform = `translateX(${newPosition}px)`;
    currentIndex1 = index;
}

function nextSlide() {
    if (currentIndex1 > 0) {
        currentIndex1--;
    } else {
        currentIndex1 = document.querySelectorAll('.slider1 img').length -1;
    }
    showSlide(currentIndex1);
}*/
document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;

    function nextSlide() {
        const slider = document.querySelector('.slider1');
        const slideWidth = document.querySelector('.slider1 img').clientWidth + 20; // Consider margin

        currentIndex = (currentIndex + 1) % slider.children.length;
        const translateValue = -currentIndex * slideWidth;

        slider.style.transform = `translateX(${translateValue}px)`;
    }

    // Attach click event listener to the right arrow
    const rightArrow = document.querySelector('.arrows.right');
    rightArrow.addEventListener('click', nextSlide);
});
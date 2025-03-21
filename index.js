document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;
    const totalCards = document.querySelectorAll('.card').length;
    const visibleCards = 3; 
    const cardWidth = 145; 

    function nextSlide() {
        if (currentIndex < totalCards - visibleCards) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    let autoSlide = setInterval(nextSlide, 2000);

    document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 2000);
    });
    
    nextButton.addEventListener('click', () => {
        nextSlide();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - visibleCards;
        }
        updateCarousel();
    });
    
    function updateCarousel() {
        const offset = -currentIndex * cardWidth; 
        carousel.style.transform = `translateX(${offset}px)`;
    }
});
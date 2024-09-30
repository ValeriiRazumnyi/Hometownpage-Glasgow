const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    let currentIndex = 0;
    const images = carousel.querySelectorAll('.widget-img');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');

    function updateCarousel(index) {
        images.forEach((img, i) => {
            img.classList.toggle('hidden', i !== index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateCarousel(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateCarousel(currentIndex);
    });

    updateCarousel(currentIndex);
});

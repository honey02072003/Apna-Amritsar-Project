let slideIndex = 0;
let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;
let slideIndex5 = 0;

function showSlide(sliderId, n) {
    let slides = document.querySelectorAll(`#${sliderId} img`);
    if (!slides || slides.length === 0) {
        console.error(`No slides found for slider with ID '${sliderId}'`);
        return;
    }
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function prevSlide(sliderId) {
    showSlide(sliderId, --slideIndex);
}

function nextSlide(sliderId) {
    showSlide(sliderId, ++slideIndex);
}

showSlide('slider1', slideIndex1);
showSlide('slider2', slideIndex2);
showSlide('slider3', slideIndex3);
showSlide('slider4', slideIndex4);
showSlide('slider5', slideIndex5);

let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  
  // Ensure the slideIndex is within bounds
  slideIndex = (slideIndex + slides.length) % slides.length; // Wrap around

  // Update the transform for each slide
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
  });
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();
});

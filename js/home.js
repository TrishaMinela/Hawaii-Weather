let slideIndex = 0;
let slides; 

function showSlides() {
  if (!slides) {
    slides = document.querySelectorAll(".slide");
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length; 
  showSlides();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length; 
  showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(); 
});

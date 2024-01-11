// Finde die Elemente
const clickButton = document.querySelector(".click-button");
const overlay = document.getElementById("myOverlay");
const closeOverlayButton = document.getElementById("closeOverlay");

// Zeige das Overlay beim Klicken an
clickButton.addEventListener("click", function () {
  overlay.style.display = "block";
});

// Verstecke das Overlay beim Klicken auf das Schließen-Symbol
closeOverlayButton.addEventListener("click", function () {
  overlay.style.display = "none";
});

// Verstecke das Overlay beim Klicken außerhalb des Inhalts
window.addEventListener("click", function (event) {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});

const slides = document.querySelector(".slides");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const indicators = document.querySelectorAll('input[type="radio"]');

let slideWidth = slides.querySelector(".slide").offsetWidth;
let currentSlide = 0;

prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    slideTo(currentSlide);
    updateIndicators(currentSlide);
  }
});

nextButton.addEventListener("click", () => {
  if (currentSlide < indicators.length - 1) {
    currentSlide++;
    slideTo(currentSlide);
    updateIndicators(currentSlide);
  }
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentSlide = index;
    slideTo(currentSlide);
    updateIndicators(currentSlide);
  });
});

function slideTo(slideIndex) {
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function updateIndicators(current) {
  indicators.forEach((indicator, index) => {
    indicator.checked = index === current;
  });
}

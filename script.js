const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const cards = document.querySelectorAll(".card");

let currentIndex = 0;
const totalCards = cards.length;

function updateCarousel() {
  const translateXValue = -currentIndex * 400; // 400px per card
  track.style.transform = `translateX(${translateXValue}px)`;
}

// manual buttons
nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // loop back to start if at end
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - 1; // go to last card if at start
  }
  updateCarousel();
});

// auto-slide
setInterval(() => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // loop back
  }
  updateCarousel();
}, 3000); // 3000ms = 3 seconds

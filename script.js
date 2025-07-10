const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const cards = document.querySelectorAll(".card");
const container = document.querySelector(".carousel-container");

let currentIndex = 0;

function updateCarousel() {
  const cardWidth = container.offsetWidth;

  // apply width dynamically to all cards
  cards.forEach(card => {
    card.style.width = `${cardWidth}px`;
    card.style.flex = `0 0 ${cardWidth}px`;
  });

  const translateXValue = -currentIndex * cardWidth;
  track.style.transform = `translateX(${translateXValue}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = cards.length - 1;
  }
  updateCarousel();
});

// update width & position on load + resize
window.addEventListener("load", updateCarousel);
window.addEventListener("resize", updateCarousel);

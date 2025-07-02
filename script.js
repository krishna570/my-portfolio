const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots');
const slides = slider.children;
let currentIndex = 0;

// Create dots
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('button');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
}
updateDots();

function goToSlide(index) {
  currentIndex = index;
  const offset = slides[0].offsetWidth + 20; // width + gap
  slider.style.transform = `translateX(-${offset * index}px)`;
  updateDots();
}

function updateDots() {
  const dots = dotsContainer.children;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.toggle('active', i === currentIndex);
  }
}

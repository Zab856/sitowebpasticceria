console.log('Hi!👽👍');

// Slider // Slider // Slider // Slider

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slide-track');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;
  let autoPlayInterval;

  function updateSliderPosition() {
    const slideWidth = slides[0].offsetWidth + 16; // larghezza + gap
    const centerOffset = (track.parentElement.offsetWidth / 2) - (slideWidth / 2);
    const translateX = -(slideWidth * currentIndex) + centerOffset;
    track.style.transform = `translateX(${translateX}px)`;
    track.style.transition = 'transform 0.5s ease';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSliderPosition();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSliderPosition();
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSliderPosition();
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 10000); // 10 secondi
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  track.addEventListener('mouseenter', stopAutoPlay);
  track.addEventListener('mouseleave', startAutoPlay);
  window.addEventListener('resize', updateSliderPosition);

  updateSliderPosition();
  startAutoPlay();
});

console.log('Hi!👽👍');

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slide-track');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;
  let autoPlayInterval;

  function updateSliderPosition() {
    const slideWidth = slides[0].offsetWidth + 16; // slide + gap
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

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 10000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  function initMobileScrollFix() {
    setTimeout(() => {
      track.scrollLeft = 0;
    }, 300);
  }

  // Inizializzazione all'apertura
  if (window.innerWidth > 768) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    track.addEventListener('mouseenter', stopAutoPlay);
    track.addEventListener('mouseleave', startAutoPlay);

    updateSliderPosition();
    startAutoPlay();
  } else {
    currentIndex = 0;
    initMobileScrollFix();
    track.style.transform = 'none';
  }

  // Gestione del resize dinamico
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      updateSliderPosition();
    } else {
      currentIndex = 0;
      initMobileScrollFix();
      track.style.transform = 'none';
    }
  });
});

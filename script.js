// ============================================
// SWIPERJS INITIALIZATION
// JavaScript Framework Requirement - Interactive Menu Carousel
// ============================================

// Check if Swiper is loaded and if .mySwiper exists on the page
if (typeof Swiper !== 'undefined' && document.querySelector('.mySwiper')) {
  const swiper = new Swiper('.mySwiper', {
    // Basic Settings
    slidesPerView: 1,
    spaceBetween: 20,
    
    // Navigation Arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Pagination Dots
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // Responsive Breakpoints
    breakpoints: {
      // Tablet (768px and up)
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // Desktop (992px and up)
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

// ============================================
// SMOOTH FADE-IN ANIMATION ON SCROLL
// (Preserved from your original code)
// ============================================

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});

// ============================================
// OPTIONAL: Add a small delay to ensure sections are visible
// (Helps with any Bootstrap conflicts)
// ============================================

// Force a re-check after page load for any sections that might have been missed
window.addEventListener('load', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
});
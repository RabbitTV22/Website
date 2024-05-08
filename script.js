// JavaScript for slideshow/carousel
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow-slide');
const totalSlides = slides.length;

function showSlides() {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  slideIndex++;

  if (slideIndex > totalSlides) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides();

// JavaScript for form validation
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  const emailInput = document.querySelector('#email');
  const emailValue = emailInput.value.trim();

  if (!isValidEmail(emailValue)) {
    event.preventDefault();
    alert('Please enter a valid email address.');
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// JavaScript for toggling light/dark mode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

toggleSwitch.addEventListener('change', function(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

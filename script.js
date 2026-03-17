// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-active');
    document.body.classList.toggle('nav-open', navLinks.classList.contains('is-open'));
  });
}

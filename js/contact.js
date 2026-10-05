// Keep the same Bootstrap navigation and shared styles as Home and About.
import './main.js';

const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');

contactForm.addEventListener('submit', (event) => {
  // Prevent a page reload: this classroom demo has no message service.
  event.preventDefault();
  contactStatus.textContent = 'Thanks for trying the demo!';
});

// Clear the old confirmation when the visitor edits the form again.
contactForm.addEventListener('input', () => {
  contactStatus.textContent = '';
});

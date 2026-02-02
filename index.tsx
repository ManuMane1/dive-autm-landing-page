// Initialize Lucide icons
// @ts-ignore
lucide.createIcons();

// Elements
const nav = document.getElementById('main-nav');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const menuIconContainer = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const contactForm = document.getElementById('contact-form');
const yearSpan = document.getElementById('year');

// Update year in footer
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
});

// Mobile menu toggle logic
let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    mobileMenu?.classList.remove('max-h-0');
    mobileMenu?.classList.add('max-h-[500px]');
    // Update Lucide icon to "x"
    if (menuIconContainer) {
      menuIconContainer.setAttribute('data-lucide', 'x');
      // @ts-ignore
      lucide.createIcons();
    }
  } else {
    mobileMenu?.classList.add('max-h-0');
    mobileMenu?.classList.remove('max-h-[500px]');
    // Update Lucide icon to "menu"
    if (menuIconContainer) {
      menuIconContainer.setAttribute('data-lucide', 'menu');
      // @ts-ignore
      lucide.createIcons();
    }
  }
}

mobileMenuButton?.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Close mobile menu on link click or clicking outside
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) toggleMenu();
  });
});

document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (isMenuOpen && !mobileMenu?.contains(target) && !mobileMenuButton?.contains(target)) {
        toggleMenu();
    }
});

// Form submission handler
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  // Simulate submission
  const button = contactForm.querySelector('button');
  if (button) {
    const originalText = button.innerHTML;
    button.disabled = true;
    button.innerHTML = 'Enviando...';
    
    setTimeout(() => {
      alert("¡Gracias por tu interés! Hemos recibido tu solicitud. Nos pondremos en contacto con vós a la brevedad.");
      button.disabled = false;
      button.innerHTML = originalText;
      (contactForm as HTMLFormElement).reset();
    }, 1500);
  }
});

// Explicit smooth scrolling for older browsers if needed, though scroll-behavior: smooth handles most
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (this: HTMLElement, e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      if (href === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const navHeight = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  });
});

lucide.createIcons();

const nav = document.getElementById('main-nav');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const menuIconContainer = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const yearSpan = document.getElementById('year');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav && nav.classList.add('scrolled');
  } else {
    nav && nav.classList.remove('scrolled');
  }
});

let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    mobileMenu && mobileMenu.classList.add('open');
    if (menuIconContainer) {
      menuIconContainer.setAttribute('data-lucide', 'x');
      lucide.createIcons();
    }
  } else {
    mobileMenu && mobileMenu.classList.remove('open');
    if (menuIconContainer) {
      menuIconContainer.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    }
  }
}

mobileMenuButton && mobileMenuButton.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) toggleMenu();
  });
});

document.addEventListener('click', (e) => {
  const target = e.target;
  if (isMenuOpen && mobileMenu && !mobileMenu.contains(target) && !mobileMenuButton.contains(target)) {
    toggleMenu();
  }
});

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const button = contactForm.querySelector('button');
    if (!button) return;

    const originalText = button.innerHTML;
    button.disabled = true;
    button.innerHTML = 'Enviando...';

    const formData = new FormData(contactForm);

    try {
      await fetch('/', {
        method: 'POST',
        body: formData
      });

      alert('¡Gracias por tu interés! Hemos recibido tu solicitud.');
      contactForm.reset();
    } catch (err) {
      alert('Error al enviar el formulario. Intentá nuevamente.');
    } finally {
      button.disabled = false;
      button.innerHTML = originalText;
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href) return;

    e.preventDefault();

    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      const navHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});
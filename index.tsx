
// Initialize Lucide icons
// @ts-ignore
lucide.createIcons();

// Elements
const nav = document.getElementById('main-nav');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const menuIconContainer = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const contactForm = document.getElementById('contact-form') as HTMLFormElement;
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
    mobileMenu?.classList.add('open');
    if (menuIconContainer) {
      menuIconContainer.setAttribute('data-lucide', 'x');
      // @ts-ignore
      lucide.createIcons();
    }
  } else {
    mobileMenu?.classList.remove('open');
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

// Updated Form submission handler with real email delivery support
contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const form = e.target as HTMLFormElement;
  const button = document.getElementById('submit-button') as HTMLButtonElement;
  const btnText = button.querySelector('span');
  const spinner = document.getElementById('btn-spinner');
  
  // Update UI to loading state
  if (button) button.disabled = true;
  if (btnText) btnText.textContent = 'Enviando...';
  spinner?.classList.remove('hidden');

  try {
    // REQUISITO: Cambia 'mjkgpzye' por tu ID de Formspree real
    // Si no tenés uno, crealo gratis en https://formspree.io/f/mjkgpzye
    const FORMSPREE_ID = 'mjkgpzye'; 
    const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;
    
    const formData = new FormData(form);
    
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert("¡Gracias por tu interés! Hemos recibido tu solicitud. El equipo de Dive Automations se pondrá en contacto con vós a la brevedad.");
      form.reset();
    } else {
      const data = await response.json();
      // FIXED: Use standard property check instead of Object.hasOwn for compatibility with older TypeScript targets
      if (data && data.errors) {
        alert("Error: " + data["errors"].map((error: any) => error["message"]).join(", "));
      } else {
        alert("Oops! Hubo un problema al enviar el formulario. Por favor, intentá de nuevo o contactanos directamente por WhatsApp.");
      }
    }
  } catch (error) {
    alert("Hubo un error de conexión. Por favor, verificá tu internet e intentá de nuevo.");
  } finally {
    // Reset UI state
    if (button) button.disabled = false;
    if (btnText) btnText.textContent = 'Evaluar mi caso';
    spinner?.classList.add('hidden');
  }
});

// Explicit smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
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

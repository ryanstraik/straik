// --- Existing script content moved from straik.html ---
const content = {
  fr: {
    title: 'Straik – Service de Micromobilité',
    nav: ['Accueil', 'Comment ça marche', 'Fonctionnalités', 'Nos Histoire', 'Contact'],
    hero: { title: 'Connectée à la ville', subtitle: '', download: 'À propos', seeMore: 'En savoir plus' },
    sections: ['Comment ça marche', 'Pourquoi Straik ?', 'Contactez-nous'],
    steps: [
      { title: 'Trouvez un Véhicule', desc: 'Trouve sur l\'application le partenaire le plus proche.' },
      { title: 'Déverrouillez et Partez', desc: 'Scanne le QR code et débranche le chargeur.' },
      { title: 'Roulez en Sécurité', desc: 'Roule prudemment en respectant les règles de circulation.' },
      { title: 'Stationnez Responsablement', desc: 'Termine le trajet chez le partenaire de ton choix, branche le chargeur et prends une photo.' }
    ],
    features: [
      { title: 'Écologique', desc: 'Zéro émission, trajets 100% électriques.' },
      { title: 'Verrouillage Intelligent', desc: 'Verrouillez et déverrouillez votre véhicule avec l\'application.' },
      { title: 'GPS Intégré', desc: 'Suivez votre itinéraire en temps réel.' },
      { title: 'Abordable', desc: 'Tarifs bas pour des trajets rapides.' }
    ],
    footer: { rights: 'Tous droits réservés.', privacy: 'Politique de Confidentialité', terms: 'Conditions d\'Utilisation' }
  },
  en: {
    title: 'Straik – Micromobility Service',
    nav: ['Home', 'How It Works', 'Features', 'Our Story', 'Contact'],
    hero: { title: 'Connected to the City', subtitle: '', download: 'Contact Us', seeMore: 'See More' },
    sections: ['How It Works', 'Why Straik?', 'Contact Us'],
    steps: [
      { title: 'Find a Vehicle', desc: 'Find the nearest partner in the app.' },
      { title: 'Unlock & Go', desc: 'Scan the QR code and unplug the charger.' },
      { title: 'Ride Safely', desc: 'Ride carefully and follow the traffic rules.' },
      { title: 'End Your Ride', desc: 'End your ride at the partner of your choice, plug in the charger, and take a photo.' }
    ],
    features: [
      { title: 'Eco-Friendly', desc: 'Zero emissions, 100% electric rides.' },
      { title: 'Smart Lock', desc: 'Lock and unlock your ride with the app.' },
      { title: 'GPS Enabled', desc: 'Track your route in real-time.' },
      { title: 'Affordable', desc: 'Low rates for quick commutes.' }
    ],
    footer: { rights: 'All rights reserved.', privacy: 'Privacy Policy', terms: 'Terms of Service' }
  }
};

function switchLanguage(lang) {
  // Update all language buttons (both header dropdown and footer)
  document.querySelectorAll('.lang-btn, .lang-option').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll(`[data-lang="${lang}"]`).forEach(btn => btn.classList.add('active'));
  
  // Update dropdown display
  const dropdown = document.getElementById('langDropdown');
  const currentLang = dropdown.querySelector('.current-lang');
  const langData = {
    fr: { 
      flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg',
      text: 'FR' 
    },
    en: { 
      flag: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg',
      text: 'EN' 
    }
  };
  
  currentLang.innerHTML = `<img src="${langData[lang].flag}" alt="${lang === 'fr' ? 'French flag' : 'British flag'}" class="flag-img"> ${langData[lang].text}`;
  
  document.title = content[lang].title;
  document.querySelectorAll('#mainNav a').forEach((link, i) => link.textContent = content[lang].nav[i]);
  document.querySelector('.header-download-btn').textContent = content[lang].hero.download;
  document.querySelector('.hero-content h1').textContent = content[lang].hero.title;
  document.querySelector('.hero-content p').textContent = content[lang].hero.subtitle;
  document.querySelector('.see-more-btn').textContent = content[lang].hero.seeMore;
  document.querySelectorAll('section h2').forEach((h2, i) => h2.textContent = content[lang].sections[i]);
  document.querySelectorAll('#how .step').forEach((step, i) => {
    step.querySelector('p').textContent = content[lang].steps[i].desc;
  });
  document.querySelectorAll('#features .feature').forEach((feature, i) => {
    feature.querySelector('h3').textContent = content[lang].features[i].title;
    feature.querySelector('p').textContent = content[lang].features[i].desc;
  });
  document.querySelector('.footer p').innerHTML = `&copy; 2025 Straik. ${content[lang].footer.rights}`;
  const footerLinks = document.querySelectorAll('.footer-links a');
  footerLinks[0].textContent = content[lang].footer.privacy;
  footerLinks[1].textContent = content[lang].footer.terms;
  localStorage.setItem('preferred-language', lang);
}

// Add event listeners for both header and footer language buttons
document.addEventListener('DOMContentLoaded', () => {
  // Footer language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => 
    btn.addEventListener('click', () => switchLanguage(btn.getAttribute('data-lang')))
  );
  
  // Header dropdown functionality
  const dropdown = document.getElementById('langDropdown');
  const dropdownMenu = document.getElementById('langDropdownMenu');
  
  // Toggle dropdown
  dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
    dropdownMenu.classList.toggle('open');
    dropdown.setAttribute('aria-expanded', dropdown.classList.contains('open'));
  });
  
  // Language option clicks
  document.querySelectorAll('.lang-option').forEach(btn => 
    btn.addEventListener('click', () => {
      switchLanguage(btn.getAttribute('data-lang'));
      dropdown.classList.remove('open');
      dropdownMenu.classList.remove('open');
      dropdown.setAttribute('aria-expanded', 'false');
    })
  );
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdown.classList.remove('open');
      dropdownMenu.classList.remove('open');
      dropdown.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Initialize with saved language preference or default to French
  switchLanguage(localStorage.getItem('preferred-language') || 'fr');
  
  // See More button functionality
  document.querySelector('.see-more-btn').addEventListener('click', function() {
    const howSection = document.getElementById('how');
    if (howSection) {
      howSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  });
  
  // Scroll indicators functionality
  const howItWorks = document.querySelector('.how-it-works');
  const scrollDots = document.querySelectorAll('.scroll-dot');
  
  if (howItWorks && scrollDots.length > 0) {
    const slider = document.querySelector('.scroll-dot-slider');
    function updateSlider() {
      const scrollLeft = howItWorks.scrollLeft;
      const stepWidth = howItWorks.querySelector('.step').offsetWidth + 32; // 32px for gap
      const totalSteps = howItWorks.querySelectorAll('.step').length;
      const maxScroll = stepWidth * (totalSteps - 1);
      // Progress: 0 (left) to 1 (right)
      const progress = Math.min(1, Math.max(0, scrollLeft / (stepWidth * 2)));
      // Get dot positions
      const dot0 = scrollDots[0].getBoundingClientRect();
      const dot1 = scrollDots[1].getBoundingClientRect();
      const parent = scrollDots[0].parentElement.getBoundingClientRect();
      const left0 = dot0.left - parent.left;
      const left1 = dot1.left - parent.left;
      const sliderLeft = left0 + (left1 - left0) * progress;
      slider.style.left = sliderLeft + 'px';
    }
    howItWorks.addEventListener('scroll', updateSlider);
    window.addEventListener('resize', updateSlider);
    setTimeout(updateSlider, 100); // Initial position after layout
    // Also update active dot for accessibility
    howItWorks.addEventListener('scroll', () => {
      const scrollLeft = howItWorks.scrollLeft;
      const stepWidth = howItWorks.querySelector('.step').offsetWidth + 32; // 32px for gap
      const currentStep = Math.round(scrollLeft / stepWidth);
      // For 2 dots: first dot for steps 0,1; second dot for steps 2,3
      const dotIndex = currentStep < 2 ? 0 : 1;
      scrollDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === dotIndex);
      });
    });
    // Click on dot to scroll to step
    scrollDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const stepWidth = howItWorks.querySelector('.step').offsetWidth + 32;
        // Dot 0 scrolls to step 0, dot 1 scrolls to step 2
        const stepTarget = index === 0 ? 0 : 2;
        howItWorks.scrollTo({
          left: stepTarget * stepWidth,
          behavior: 'smooth'
        });
      });
    });
    // Initialize first dot as active
    scrollDots[0].classList.add('active');
  }
});

// Header functionality
let lastScrollY = window.scrollY;
const header = document.getElementById('mainHeader');
const nav = document.getElementById('mainNav');
const hamburger = document.getElementById('hamburgerMenu');
const navLinks = nav.querySelectorAll('a');

window.addEventListener('scroll', () => {
  // Remove hide-header logic, only handle 'scrolled' class and nav link highlighting
  if(window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
  let fromTop = window.scrollY + 80;
  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if(section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

hamburger.addEventListener('click', () => nav.classList.toggle('open'));
hamburger.addEventListener('keypress', (e) => { if(e.key === 'Enter' || e.key === ' ') nav.classList.toggle('open'); });
navLinks.forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.addEventListener('click', (e) => {
  if(window.innerWidth <= 900 && nav.classList.contains('open') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
  }
});

// Header background scroll effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('mainHeader');
  const howSection = document.getElementById('how');
  if (!header || !howSection) return;
  const howTop = howSection.getBoundingClientRect().top + window.scrollY;
  if (window.scrollY + 300 >= howTop) {
    header.classList.add('scrolled-header');
  } else {
    header.classList.remove('scrolled-header');
  }
});

// --- New dynamic/visual improvements ---
// Smooth scroll for nav links
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const section = document.querySelector(this.hash);
    if(section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Ripple effect for .cta-btn
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add('ripple');
  const ripple = button.getElementsByClassName('ripple')[0];
  if(ripple) ripple.remove();
  button.appendChild(circle);
}
document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('click', createRipple);
});

// Add ripple CSS dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 0.6s linear;
  background: rgba(255, 111, 0, 0.4);
  pointer-events: none;
  z-index: 2;
}
@keyframes ripple {
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}`;
document.head.appendChild(rippleStyle);

document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
});

// Fade-in animation for sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('section, .hero').forEach(el => {
  el.classList.add('fade-init');
  observer.observe(el);
});
// Add fade-in CSS dynamically
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `.fade-init { opacity: 0; transform: translateY(40px); transition: opacity 0.8s, transform 0.8s; }
.fade-in { opacity: 1 !important; transform: none !important; }`;
document.head.appendChild(fadeStyle); 

window.addEventListener('scroll', function() {
  const btn = document.querySelector('.header-download-btn');
  if (!btn) return;
  if (window.scrollY > 60) {
    btn.classList.add('scrolled');
  } else {
    btn.classList.remove('scrolled');
  }
});
// Enhanced Mobile-First JavaScript for Straik

// Language content
const content = {
  fr: {
    title: 'Straik – Service de Micromobilité',
    nav: ['Accueil', 'À propos', 'Actualité', 'Aide & FAQ'],
    hero: {
      title: 'Connectée à la ville',
      subtitle: 'Découvrez la micromobilité nouvelle génération',
      cta: 'En savoir plus'
    },
    sections: {
      how: 'Comment utiliser Straik ?',
      features: 'Pourquoi choisir Straik ?',
      blog: 'Actualité Straik'
    },
    steps: [
      {
        title: 'Trouvez un Véhicule',
        desc: 'Trouve sur l\'application le partenaire le plus proche'
      },
      {
        title: 'Déverrouillez et Partez',
        desc: 'Scanne le QR code'
      },
      {
        title: 'Roulez en Sécurité',
        desc: 'Roule prudemment en respectant les règles de circulation'
      },
      {
        title: 'Stationnez Responsablement',
        desc: 'Termine le trajet chez le partenaire de ton choix'
      }
    ],
    features: [
      {
        title: 'Le Prix',
        desc: 'Straik est moins cher que les vélos en libre service'
      },
      {
        title: 'La Qualité',
        desc: 'Nos trottinettes de dernière génération sont très solides agréables à conduire et pensées pour les routes parisiennes'
      },
      {
        title: 'La simplicité',
        desc: 'Un service simple sans prise de tête'
      }
    ],
    footer: {
      links: 'Liens utiles',
      apps: 'Téléchargez l\'application',
      social: 'Rejoins nous sur :',
      copyright: '© 2025 Straik. Tous droits réservés.'
    }
  },
  en: {
    title: 'Straik – Micromobility Service',
    nav: ['Home', 'About', 'News', 'Help & FAQ'],
    hero: {
      title: 'Connected to the city',
      subtitle: 'Discover next-generation micromobility',
      cta: 'Learn More'
    },
    sections: {
      how: 'How to use Straik?',
      features: 'Why choose Straik?',
      blog: 'Straik News'
    },
    steps: [
      {
        title: 'Find a Vehicle',
        desc: 'Find the nearest partner on the app'
      },
      {
        title: 'Unlock and Go',
        desc: 'Scan the QR code'
      },
      {
        title: 'Ride Safely',
        desc: 'Ride carefully following traffic rules'
      },
      {
        title: 'Park Responsibly',
        desc: 'End the trip at your chosen partner'
      }
    ],
    features: [
      {
        title: 'The Price',
        desc: 'Straik is cheaper than bike sharing services'
      },
      {
        title: 'The Quality',
        desc: 'Our latest generation scooters are very solid, pleasant to drive and designed for Parisian roads'
      },
      {
        title: 'Simplicity',
        desc: 'A simple service without hassle'
      }
    ],
    footer: {
      links: 'Useful links',
      apps: 'Download the app',
      social: 'Join us on:',
      copyright: '© 2025 Straik. All rights reserved.'
    }
  }
};

// Language switcher functionality
class LanguageSwitcher {
  constructor() {
    this.currentLang = localStorage.getItem('straik_lang') || 'fr';
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updateLanguage(this.currentLang);
  }

  setupEventListeners() {
    const langBtn = document.querySelector('.lang-switch-btn');
    const langOptions = document.querySelector('.lang-options');
    const langOptionBtns = document.querySelectorAll('.lang-option');

    if (langBtn && langOptions) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langOptions.classList.toggle('open');
      });

      document.addEventListener('click', () => {
        langOptions.classList.remove('open');
      });

      langOptionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const lang = btn.getAttribute('data-lang');
          this.updateLanguage(lang);
          langOptions.classList.remove('open');
        });
      });
    }
  }

  updateLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('straik_lang', lang);
    
    // Update flag and text in switcher
    this.updateSwitcherDisplay(lang);
    
    // Translate all elements
    this.translatePage(lang);
  }

  updateSwitcherDisplay(lang) {
    const flagImg = document.querySelector('.lang-switch-btn .flag-img');
    const langText = document.querySelector('.lang-text');
    
    const flags = {
      fr: {
        src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg',
        text: 'FR'
      },
      en: {
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg',
        text: 'EN'
      }
    };

    if (flagImg && langText && flags[lang]) {
      flagImg.src = flags[lang].src;
      langText.textContent = flags[lang].text;
    }
  }

  translatePage(lang) {
    // Update all elements with data attributes
    const elementsToTranslate = document.querySelectorAll('[data-fr][data-en]');
    
    elementsToTranslate.forEach(element => {
      const translation = element.getAttribute(`data-${lang}`);
      if (translation) {
        if (element.tagName === 'TIME') {
          element.textContent = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // Update document title
    document.title = content[lang].title;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }
}

// Mobile menu functionality
class MobileMenu {
  constructor() {
    this.init();
  }

  init() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileNavOverlay) {
      mobileMenuBtn.addEventListener('click', () => {
        this.toggleMenu();
      });

      mobileNavClose?.addEventListener('click', () => {
        this.closeMenu();
      });

      mobileNavOverlay.addEventListener('click', (e) => {
        if (e.target === mobileNavOverlay) {
          this.closeMenu();
        }
      });

      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          this.closeMenu();
        });
      });
    }
  }

  toggleMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mainContent = document.querySelector('main');
    
    mobileMenuBtn.classList.toggle('active');
    mobileNavOverlay.classList.toggle('open');
    
    // Remove blur effect - keep main content clear
      mainContent.style.filter = 'none';
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileNavOverlay.classList.contains('open') ? 'hidden' : '';
  }

  closeMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mainContent = document.querySelector('main');
    
    mobileMenuBtn.classList.remove('active');
    mobileNavOverlay.classList.remove('open');
    mainContent.style.filter = 'none';
    document.body.style.overflow = '';
  }
}

// Smooth scrolling functionality
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const sectionTop = section.offsetTop - headerHeight;
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }
}

// Header scroll effect
class HeaderScroll {
  constructor() {
    this.header = document.querySelector('.header');
    this.lastScrollY = window.scrollY;
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });
  }

  handleScroll() {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
    this.lastScrollY = currentScrollY;
  }
}

// Intersection Observer for animations
class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.step-card, .feature-card, .blog-card');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
}

// Performance optimizations
class PerformanceOptimizer {
  constructor() {
    this.init();
  }

  init() {
    // Lazy load images
    this.setupLazyLoading();
    
    // Preload critical resources
    this.preloadCriticalResources();
  }

  setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  preloadCriticalResources() {
    // Preload hero image
    const heroImage = new Image();
    heroImage.src = 'ChatGPT Image 14 juil. 2025, 12_55_00.png';
  }
}

// Download button functionality
function handleDownloadClick() {
  const downloadBtn = document.getElementById('downloadBtn');
  
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      // Detect browser and platform
      const userAgent = navigator.userAgent;
      const isIOS = /iPad|iPhone|iPod/.test(userAgent);
      const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
      const isAndroid = /Android/.test(userAgent);
      const isChrome = /Chrome/.test(userAgent);
      
      let storeUrl;
      
      if (isIOS || isSafari) {
        // Redirect to App Store for iOS/Safari
        storeUrl = 'https://www.apple.com/app-store/';
      } else if (isAndroid || isChrome) {
        // Redirect to Google Play Store for Android/Chrome
        storeUrl = 'https://play.google.com/store';
      } else {
        // Default to Google Play Store for other browsers
        storeUrl = 'https://play.google.com/store';
      }
      
      // Open the appropriate store
      window.open(storeUrl, '_blank', 'noopener,noreferrer');
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new LanguageSwitcher();
  new MobileMenu();
  new HeaderScroll();
  new ScrollAnimations();
  new PerformanceOptimizer();
  handleDownloadClick();
  
  // Make scrollToSection globally available
  window.scrollToSection = scrollToSection;
});

// Handle resize events
window.addEventListener('resize', () => {
  // Close mobile menu on resize to desktop
  if (window.innerWidth >= 1024) {
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (mobileNavOverlay && mobileNavOverlay.classList.contains('open')) {
      mobileNavOverlay.classList.remove('open');
      mobileMenuBtn.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});
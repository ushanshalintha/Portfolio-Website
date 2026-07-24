/* ==========================================================================
   K.P. Ushan Shalintha Jayathilaka — Portfolio
   main.js — scroll-spy navigation, mobile dropdown menu, hero reveal
   animation, and scroll-triggered section reveal.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  setCopyrightYear();
  setupMobileNav();
  setupScrollSpy();
  setupHeroReveal();
  setupScrollReveal();
});

/* ---- footer copyright year ---- */
function setCopyrightYear() {
  const el = document.getElementById('copyYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ---- mobile nav dropdown toggle ---- */
function setupMobileNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('navLinks');
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // close the dropdown after a link is tapped
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ---- fade + rise each section in as it enters the viewport ---- */
function setupScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (targets.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(el => observer.observe(el));
}

/* ---- highlight the active section in the navbar as you scroll ---- */
function setupScrollSpy() {
  const links = document.querySelectorAll('.nav-link');
  const sections = Array.from(links)
    .map(link => document.getElementById(link.dataset.section))
    .filter(Boolean);

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach(link => {
        link.classList.toggle('is-active', link.dataset.section === id);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

/* ---- reveal the hero result card shortly after page load ---- */
function setupHeroReveal() {
  const result = document.getElementById('heroResult');
  if (!result) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const delay = prefersReducedMotion ? 0 : 500;

  window.setTimeout(() => {
    result.classList.add('is-visible');
  }, delay);
}

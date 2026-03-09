/* ============================================================
   AI Builder Arena — Landing Page Scripts
   ============================================================ */

/* ---------- Nav: scroll behaviour ---------- */
const nav = document.getElementById('nav');

const onScroll = () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Mobile nav toggle ---------- */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

const closeMobileNav = () => {
  if (!hamburger || !mobileNav) return;
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
};

if (hamburger && mobileNav) {
  const mobileNavLinks = mobileNav.querySelectorAll('a, .btn');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
}

/* ---------- Smooth scroll for anchor links ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ---------- Intersection Observer: fade-in ---------- */
const fadeEls = document.querySelectorAll('.fade-in');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  fadeEls.forEach(el => observer.observe(el));
} else {
  fadeEls.forEach(el => el.classList.add('visible'));
}

/* ---------- Waitlist form ---------- */
const waitlistForm = document.getElementById('waitlist-form');
const waitlistSuccess = document.getElementById('waitlist-success');

if (waitlistForm && waitlistSuccess) {
  waitlistForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = waitlistForm.querySelector('input[type="email"]').value.trim();
    if (!email) return;

    // Simulate submission (replace with real API call)
    const btn = waitlistForm.querySelector('button[type="submit"]');
    btn.textContent = 'Joining…';
    btn.disabled = true;

    setTimeout(() => {
      waitlistForm.style.display = 'none';
      waitlistSuccess.classList.add('show');
    }, 800);
  });
}

/* ---------- Animated counter for hero stats ---------- */
const animateCounter = (el, target, duration) => {
  let start = 0;
  const step = Math.ceil(target / (duration / 16));
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = start.toLocaleString() + (el.dataset.suffix || '');
  }, 16);
};

if ('IntersectionObserver' in window) {
  const statsObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          if (!isNaN(target)) {
            animateCounter(el, target, 1200);
          }
          statsObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-target]').forEach(el => statsObserver.observe(el));
} else {
  // Fallback: just show the final values immediately
  document.querySelectorAll('[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    if (!isNaN(target)) {
      el.textContent = target.toLocaleString() + (el.dataset.suffix || '');
    }
  });
}

/* ---------- Challenge cards: ripple effect on click ---------- */
document.querySelectorAll('.challenge-card').forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = 'scale(0.98)';
    setTimeout(() => { card.style.transform = ''; }, 150);
  });
});

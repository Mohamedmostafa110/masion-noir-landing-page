/**
 * MAISON NOIR — Flagship JS
 * Vanilla ES6+, zero dependencies
 */

'use strict';

/* ─── Navigation: scroll state + mobile ────────────────── */

(function navigation() {
  const nav      = document.querySelector('.nav-main');
  const toggle   = document.getElementById('menu-toggle');
  const menu     = document.getElementById('mobile-menu');
  if (!nav) return;

  // Scroll state
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('is-scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
      document.body.style.overflow = open ? '' : 'hidden';
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }
})();

/* ─── Scroll Reveal ────────────────────────────────────── */

(function scrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  els.forEach(el => observer.observe(el));
})();

/* ─── Smooth Anchor Scroll ─────────────────────────────── */

(function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (id === '#' || id === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    });
  });
})();

/* ─── Product Modal ────────────────────────────────────── */

(function productModal() {
  const overlay = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close');
  const content  = document.getElementById('modal-body');
  if (!overlay) return;

  const products = {
    'ambre-noir': {
      name: 'Ambre Noir',
      collection: 'Warm Amber Collection',
      price: '$195',
      size: '50ml Eau de Parfum',
      desc: 'A commanding warmth at the opening gives way to cedar and a quiet, lasting amber that settles into the skin like a memory. Composed for those who prefer presence over volume.',
      top: 'Saffron, Black Cardamom',
      heart: 'Cedarwood, Oud',
      base: 'Warm Amber, Labdanum, Musk',
      img: 'assets/images/ambre-noir.jpg'
    },
    'fig-vetiver': {
      name: 'Fig & Vetiver',
      collection: 'Botanical Collection',
      price: '$175',
      size: '50ml Eau de Parfum',
      desc: 'An opening of cool green fig dries into earthy vetiver and a bed of warm woods. Quietly confident, clean but complex. A fragrance that rewards patience.',
      top: 'Green Fig, Galbanum',
      heart: 'Vetiver, Iris',
      base: 'Sandalwood, Dry Woods, White Musk',
      img: 'assets/images/fig-vetiver.jpg'
    },
    'rose-obsidienne': {
      name: 'Rose Obsidienne',
      collection: 'Nocturne Collection',
      price: '$215',
      size: '50ml Eau de Parfum',
      desc: 'A rose that refuses to be delicate. Darkened by black pepper and anchored in smoky musk, this fragrance has the character of an evening that lasts well into morning.',
      top: 'Black Pepper, Bergamot',
      heart: 'Damask Rose, Peony',
      base: 'Smoky Musk, Vetiver, Patchouli',
      img: 'assets/images/rose-obsidienne.jpg'
    }
  };

  function open(id) {
    const p = products[id];
    if (!p || !content) return;

    content.innerHTML = `
      <div class="modal-box">
        <button id="modal-close-inner" class="modal-close" aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <div style="background:var(--color-cream);display:flex;align-items:center;justify-content:center;padding:2.5rem;min-height:320px">
          <img src="${p.img}" alt="${p.name} perfume bottle" width="260" height="320" style="object-fit:contain;max-height:300px" loading="lazy"/>
        </div>
        <div style="padding:clamp(2rem,4vw,3rem);display:flex;flex-direction:column;justify-content:center">
          <p class="eyebrow" style="margin-bottom:0.75rem">${p.collection}</p>
          <h2 style="font-family:var(--font-display);font-size:clamp(1.8rem,3vw,2.4rem);font-weight:300;color:var(--color-ink);margin-bottom:1rem">${p.name}</h2>
          <p style="font-size:0.82rem;line-height:1.8;color:var(--color-muted);margin-bottom:1.5rem">${p.desc}</p>
          <div style="margin-bottom:1.5rem;font-size:0.72rem;color:var(--color-muted);line-height:2">
            <div><span style="color:var(--color-gold);letter-spacing:0.1em;text-transform:uppercase;font-size:0.55rem;font-weight:500">Top</span>&ensp;${p.top}</div>
            <div><span style="color:var(--color-gold);letter-spacing:0.1em;text-transform:uppercase;font-size:0.55rem;font-weight:500">Heart</span>&ensp;${p.heart}</div>
            <div><span style="color:var(--color-gold);letter-spacing:0.1em;text-transform:uppercase;font-size:0.55rem;font-weight:500">Base</span>&ensp;${p.base}</div>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem">
            <span style="font-family:var(--font-display);font-size:1.5rem;color:var(--color-ink)">${p.price}</span>
            <span style="font-size:0.7rem;color:var(--color-muted)">${p.size}</span>
          </div>
          <button class="btn-primary" style="width:100%;justify-content:center" onclick="this.textContent='Added to Selection';this.style.background='var(--color-charcoal)';this.style.color='var(--color-ivory)';this.style.borderColor='var(--color-charcoal)';setTimeout(()=>{this.textContent='Add to Selection';this.style.background='';this.style.color='';this.style.borderColor=''},2000)">
            Add to Selection
          </button>
        </div>
      </div>
    `;

    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    document.getElementById('modal-close-inner')?.addEventListener('click', close);
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Delegate clicks from product cards
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-product]');
    if (trigger) {
      e.preventDefault();
      open(trigger.dataset.product);
    }
  });

  // Close on overlay click or Escape
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
})();

/* ─── Parallax-lite on hero image ──────────────────────── */

(function parallaxHero() {
  const img = document.querySelector('.hero-img-wrap img');
  if (!img || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
          img.style.transform = `translateY(${y * 0.08}px) scale(1)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

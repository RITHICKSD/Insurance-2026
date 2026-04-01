/* ============================================================
   HOME 1 — Interactive JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Testimonial Carousel ── */


  /* ── FAQ Accordion ── */
  (function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const btn = item.querySelector('.faq-q');
      const icon = item.querySelector('.faq-ic');
      btn?.addEventListener('click', () => {
        const wasOpen = item.classList.contains('faq-open');
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('faq-open');
          const ic = i.querySelector('.faq-ic');
          if (ic) ic.textContent = '+';
        });
        if (!wasOpen) {
          item.classList.add('faq-open');
          if (icon) icon.textContent = '−';
        }
      });
    });
  })();

  /* ── Quote Calculator ── */
  (function initCalculator() {
    window.handleQuote = function(e) {
      e.preventDefault();
      const type = document.getElementById('coverType')?.value || 'Life';
      const age = parseInt(document.getElementById('quoteAge')?.value) || 30;
      const cover = parseInt(document.getElementById('quoteCover')?.value) || 100000;
      const base = { 'Life & Health': 0.0004, 'Vehicle & Auto': 0.0006, 'Home & Property': 0.0003, 'Business & Trade': 0.0008, 'Travel Insurance': 0.0001 };
      const rate = (base[type] || 0.0004) * (1 + (age - 25) * 0.012);
      const monthly = Math.round(cover * rate);
      const result = document.getElementById('calcResult');
      if (result) {
        result.style.display = 'block';
        result.innerHTML = `🎉 Estimated Monthly Premium for <strong>${type}</strong>:<br><span style="font-size:1.6rem;color:var(--gold-light)">$${monthly.toLocaleString()}/mo</span><br><small style="opacity:.7">Final premium subject to underwriting. Contact us for exact quote.</small>`;
      }
    };
  })();

  /* ── Newsletter ── */
  (function initNewsletter() {
    window.handleNewsletter = function(e) {
      e.preventDefault();
      const form = e.target;
      const input = form.querySelector('.nl-input');
      const btn = form.querySelector('.nl-btn');
      if (btn) { btn.textContent = '✓ Subscribed!'; btn.style.background = 'linear-gradient(135deg,#22C55E,#16A34A)'; }
      if (input) input.value = '';
      setTimeout(() => {
        if (btn) { btn.innerHTML = 'Subscribe <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'; btn.style.background = ''; }
      }, 3500);
    };
  })();

  /* ── Claims Steps Interactive ── */
  (function initClaims() {
    document.querySelectorAll('.cs-step').forEach(step => {
      step.addEventListener('click', () => {
        document.querySelectorAll('.cs-step').forEach(s => s.classList.remove('cs-active'));
        step.classList.add('cs-active');
      });
    });
  })();

  /* ── Stat Bars on scroll ── */
  (function initStatBars() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('.stat-item').forEach(el => observer.observe(el));
  })();

  /* ── CTA Particles ── */
  (function initParticles() {
    const wrap = document.getElementById('ctaParticles');
    if (!wrap) return;
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 4 + 2;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const dur = Math.random() * 10 + 6;
      const delay = Math.random() * 6;
      p.style.cssText = `
        position:absolute;
        width:${size}px;height:${size}px;
        left:${x}%;top:${y}%;
        background:rgba(201,168,76,${Math.random() * 0.3 + 0.05});
        border-radius:50%;
        animation:particleRise ${dur}s ${delay}s linear infinite;
      `;
      wrap.appendChild(p);
    }
    if (!document.getElementById('particleStyle')) {
      const style = document.createElement('style');
      style.id = 'particleStyle';
      style.textContent = `
        @keyframes particleRise {
          0%{transform:translateY(0) scale(1);opacity:0}
          10%{opacity:1}
          90%{opacity:.5}
          100%{transform:translateY(-120px) scale(.5);opacity:0}
        }
      `;
      document.head.appendChild(style);
    }
  })();

  /* ── Hero Badge Card Animation ── */
  (function initHero() {
    const card = document.querySelector('.shield-badge-card');
    if (!card) return;
    setTimeout(() => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(10px)';
      card.style.transition = 'opacity .8s, transform .8s';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      });
    }, 1200);
  })();

});

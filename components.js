/* ============================================================
   IST Insurance — Shared Components JS
   ============================================================ */
(function(){
  /* ── NAV HTML ── */
  const NAV_HTML = `
<header class="site-header" id="siteHeader">
  <div class="header-inner">
    <a href="index.html" class="header-logo" aria-label="IST Insurance Home">
      <svg class="logo-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 3L40 11V23C40 33 32 40.5 22 43C12 40.5 4 33 4 23V11Z" fill="#0A2E1F"/>
        <path d="M22 7L36 13.5V23C36 31 29.5 37 22 39.5C14.5 37 8 31 8 23V13.5Z" fill="none" stroke="#C9A84C" stroke-width="1"/>
        <path d="M15 22l5 5 9-9" stroke="#C9A84C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="logo-text"><span class="lt1">IST</span><span class="lt2">Insurance Group</span></div>
    </a>
    <nav class="header-nav" aria-label="Main navigation">
      <ul class="nav-list">
        <li class="nav-item">
          <button class="nav-link" aria-haspopup="true">Home
            <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="dropdown">
            <a href="index.html">Home 1</a>
            <a href="home2.html">Home 2</a>
          </div>
        </li>
        <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
        <li class="nav-item"><a href="services.html" class="nav-link">Services</a></li>
        <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
        <li class="nav-item">
          <button class="nav-link" aria-haspopup="true">Dashboard
            <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="dropdown">
            <a href="user-dashboard.html">User Dashboard</a>
            <a href="admin-dashboard.html">Admin Dashboard</a>
          </div>
        </li>
      </ul>
    </nav>
    <div class="header-right">
      <div class="header-toggles">
        <button class="lang-toggle" id="themeToggle" aria-label="Toggle Dark/Light Mode">
          <span data-icon="moon" style="width:18px;height:18px;display:flex"></span>
        </button>
        <button class="lang-toggle" id="langToggle" aria-label="Toggle RTL/LTR">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
        </button>
      </div>
      <a href="login.html" class="btn-cta">Portal Access</a>
      <div class="hamburger" id="hamburger" aria-label="Menu" role="button" tabindex="0">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>
</header>
<div class="mobile-menu" id="mobileMenu" aria-label="Mobile navigation">
  <ul class="mobile-nav-list">
    <li>
      <button class="mobile-nav-link" id="mob-home-btn">Home
        <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="mobile-dropdown" id="mob-home-dd">
        <a href="index.html">Home 1</a>
        <a href="home2.html">Home 2</a>
      </div>
    </li>
    <li><a href="about.html" class="mobile-nav-link">About</a></li>
    <li><a href="services.html" class="mobile-nav-link">Services</a></li>
    <li><a href="contact.html" class="mobile-nav-link">Contact</a></li>
    <li>
      <button class="mobile-nav-link" id="mob-dash-btn">Dashboard
        <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="mobile-dropdown" id="mob-dash-dd">
        <a href="user-dashboard.html">User Dashboard</a>
        <a href="admin-dashboard.html">Admin Dashboard</a>
      </div>
    </li>
  </ul>
  <div class="mobile-divider"></div>
  <div class="mobile-bottom">
    <a href="login.html" class="btn-primary" style="width:100%;justify-content:center">Login</a>
  </div>
</div>`;

  /* ── FOOTER HTML ── */
  const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="header-logo" style="margin-bottom:0">
          <svg style="width:44px;height:44px" viewBox="0 0 44 44" fill="none">
            <path d="M22 3L40 11V23C40 33 32 40.5 22 43C12 40.5 4 33 4 23V11Z" fill="rgba(201,168,76,.1)"/>
            <path d="M22 7L36 13.5V23C36 31 29.5 37 22 39.5C14.5 37 8 31 8 23V13.5Z" fill="none" stroke="#C9A84C" stroke-width="1.2"/>
            <path d="M15 22l5 5 9-9" stroke="#C9A84C" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
          <div class="logo-text"><span class="lt1">IST</span><span class="lt2">Insurance Group</span></div>
        </a>
        <p>Protecting families, businesses and futures worldwide since 1998 with integrity, compassion and innovation.</p>
        <div class="footer-socials">
          <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
          <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>
          <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="about.html#team">Our Team</a></li>
          <li><a href="about.html#values">Core Values</a></li>
          <li><a href="about.html#mission">Mission</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="services.html">Life &amp; Health</a></li>
          <li><a href="services.html">Vehicle Cover</a></li>
          <li><a href="services.html">Home Insurance</a></li>
          <li><a href="services.html">Business Plans</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="contact.html">Get a Quote</a></li>
          <li><a href="contact.html">Claims Support</a></li>
          <li><a href="contact.html">Find an Advisor</a></li>
          <li><a href="login.html">Client Portal</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <span>&copy; 2026 IST Insurance Group. All rights reserved.</span>
        <div style="display:flex;gap:20px;flex-wrap:wrap">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>`;

  /* ── INJECT ── */
  if (!document.body.classList.contains('no-global-components')) {
    document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  }

  /* ── ACTIVE NAV ── */
  const path = location.pathname.split('/').pop() || 'index.html';

  // Mark direct links active
  document.querySelectorAll('.nav-link[href], .dropdown a, .mobile-nav-link[href], .mobile-dropdown a').forEach(a => {
    if (a.getAttribute('href') === path) { a.classList.add('active'); }
  });

  // Mark parent nav button active when a dropdown child matches current page
  document.querySelectorAll('.nav-item').forEach(item => {
    const childMatch = item.querySelector(`.dropdown a[href="${path}"]`);
    if (childMatch) {
      const parentBtn = item.querySelector('.nav-link');
      if (parentBtn) parentBtn.classList.add('active');
    }
  });

  // Mark parent mobile button active when a mobile dropdown child matches
  document.querySelectorAll('.mobile-nav-list > li').forEach(li => {
    const childMatch = li.querySelector(`.mobile-dropdown a[href="${path}"]`);
    if (childMatch) {
      const parentBtn = li.querySelector('.mobile-nav-link');
      if (parentBtn) parentBtn.classList.add('active');
    }
  });

  /* ── SCROLL SHRINK ── */
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 50);
  }, {passive:true});
  header?.classList.toggle('scrolled', window.scrollY > 50);

  /* ── HAMBURGER ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
    document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
  });

  /* ── MOBILE DROPDOWNS ── */
  [['mob-home-btn','mob-home-dd'], ['mob-dash-btn','mob-dash-dd']].forEach(([btnId, ddId]) => {
    const btn = document.getElementById(btnId);
    const dd = document.getElementById(ddId);
    if (!btn || !dd) return;
    btn.addEventListener('click', () => {
      btn.classList.toggle('expanded');
      dd.classList.toggle('open');
    });
  });

  /* ── RTL/LTR ── */
  const dir = localStorage.getItem('IST-dir') || 'ltr';
  document.documentElement.setAttribute('dir', dir);

  /* ── THEME ── */
  const theme = localStorage.getItem('IST-theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);

  function updateThemeIcon(t) {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const iconSpan = btn.querySelector('span[data-icon]');
    if (iconSpan) {
      const iconName = t === 'light' ? 'moon' : 'sun';
      iconSpan.setAttribute('data-icon', iconName);
      if (typeof ISTIcons !== 'undefined' && ISTIcons[iconName]) {
        iconSpan.innerHTML = ISTIcons[iconName];
      }
    }
  }
  updateThemeIcon(theme);

  // Only bind toggle events on public pages (not dashboards which handle their own)
  const isPublicPage = !document.body.classList.contains('no-global-components');

  if (isPublicPage) {
    function toggleDir() {
      const html = document.documentElement;
      html.style.transition = 'none';
      document.querySelectorAll('*').forEach(el => el.style.transition = 'none');
      const current = html.getAttribute('dir');
      const next = current === 'ltr' ? 'rtl' : 'ltr';
      html.setAttribute('dir', next);
      localStorage.setItem('IST-dir', next);
      void html.offsetHeight;
      html.style.transition = '';
      document.querySelectorAll('*').forEach(el => el.style.transition = '');
    }
    document.getElementById('langToggle')?.addEventListener('click', toggleDir);

    function toggleTheme() {
      const html = document.documentElement;
      const current = html.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('IST-theme', next);
      updateThemeIcon(next);
    }
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
  }

  /* ── SCROLL REVEAL ── */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => revealObserver.observe(el));

  /* ── STAT COUNTERS ── */
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count || '0');
      const suffix = el.dataset.suffix || '';
      let start = 0;
      const duration = 1800;
      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

})();


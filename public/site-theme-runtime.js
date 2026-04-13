(function () {
  if (window.__eraSharedThemeRuntimeInit) return;
  window.__eraSharedThemeRuntimeInit = true;

  var THEME_STORAGE_KEY = 'nebim-era-theme';
  var BG_STORAGE_KEY = 'nebim-era-bg-index';
  var SHARED_BACKGROUND_ROUTES = [
    '/',
    '/features',
    '/paas',
    '/paas-sss',
    '/certified',
    '/paket-1',
    '/paket-2',
    '/paket-3',
    '/paket-custom',
    '/gizlilik-politikasi',
    '/kvkk-aydinlatma',
    '/cerez-politikasi'
  ];
  var BACKGROUNDS = [
    '/assets/hero-bg-5-4y-ulTK6.jpg',
    '/assets/hero-bg-4-C8D05Lrt.jpg',
    '/assets/hero-bg-6-aYEJ3kJ3.jpg',
    '/assets/hero-bg-7-VK1-adSZ.jpg',
    '/assets/hero-bg-8-COkiJGCV.jpg',
    '/assets/hero-bg-9-CpY9ERRj.jpg',
    '/assets/hero-bg-10-BEjcwZQ5.jpg',
    '/assets/hero-bg-11-BsKdDTyG.jpg',
    '/assets/hero-bg-3-DY7nlTUD.jpg'
  ];
  var root = document.documentElement;
  var originalApplyTheme = typeof window.applyTheme === 'function' ? window.applyTheme.bind(window) : null;

  function readStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // no-op
    }
  }

  function normalizeTheme(value) {
    return value === 'light' ? 'light' : 'dark';
  }

  function normalizeBgIndex(value) {
    var numeric = Number.parseInt(value, 10);

    if (!Number.isFinite(numeric) || numeric < 0) {
      return 0;
    }

    return numeric % BACKGROUNDS.length;
  }

  function getNormalizedPathname() {
    var pathname = window.location.pathname.replace(/\/+$/, '');

    return pathname || '/';
  }

  function shouldUseSharedBackground() {
    return SHARED_BACKGROUND_ROUTES.indexOf(getNormalizedPathname()) !== -1;
  }

  function getBackgroundScope() {
    var pathname = getNormalizedPathname();

    if (pathname === '/') {
      return 'hero';
    }

    if (SHARED_BACKGROUND_ROUTES.indexOf(pathname) !== -1) {
      return 'header-stage';
    }

    return 'none';
  }

  function syncSharedBackgroundClass() {
    root.setAttribute('data-era-bg-scope', getBackgroundScope());

    if (shouldUseSharedBackground()) {
      root.classList.add('era-shared-background');
      return;
    }

    root.classList.remove('era-shared-background');
  }

  function getHero() {
    return document.querySelector('.hero-teams');
  }

  function getCurrentTheme() {
    return normalizeTheme(window.__eraTheme || root.getAttribute('data-theme'));
  }

  function getCurrentBgIndex() {
    if (typeof window.__eraBgIndex === 'number') {
      return normalizeBgIndex(window.__eraBgIndex);
    }

    return normalizeBgIndex(root.getAttribute('data-era-bg-index') || readStorage(BG_STORAGE_KEY) || '0');
  }

  function applyThemeValue(theme) {
    var safeTheme = normalizeTheme(theme);

    if (originalApplyTheme) {
      originalApplyTheme(safeTheme);
    }

    root.setAttribute('data-theme', safeTheme);
    window.__eraTheme = safeTheme;
    writeStorage(THEME_STORAGE_KEY, safeTheme);

    return safeTheme;
  }

  function applyBackgroundValue(index) {
    var safeIndex = normalizeBgIndex(index);
    var imageValue = "url('" + BACKGROUNDS[safeIndex] + "')";
    var hero = getHero();

    root.style.setProperty('--era-site-bg', imageValue);
    root.setAttribute('data-era-bg-index', String(safeIndex));
    window.__eraBgIndex = safeIndex;
    window.__eraBackgrounds = BACKGROUNDS.slice();
    syncSharedBackgroundClass();

    if (hero) {
      hero.style.setProperty('--hero-bg', imageValue);
    }

    writeStorage(BG_STORAGE_KEY, String(safeIndex));

    return safeIndex;
  }

  function bindBackgroundButton(button) {
    if (!button || button.dataset.eraBgBound === 'true') return;

    button.dataset.eraBgBound = 'true';
    button.removeAttribute('onclick');
    button.addEventListener('click', function (event) {
      event.preventDefault();
      window.cycleBackgroundVariant();
    });
  }

  function ensureBackgroundButton() {
    var controls = document.querySelector('.nav-ctrls') || document.querySelector('.nav-act');
    var themeButton;
    var button;

    if (!controls) return;

    button = controls.querySelector('.js-bg-toggle') || controls.querySelector('[aria-label="Arka plan değiştir"]');

    if (button) {
      bindBackgroundButton(button);
      return;
    }

    themeButton = controls.querySelector('.js-theme-toggle') || controls.querySelector('.theme-ico[aria-label="Tema"]');
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-ico js-bg-toggle';
    button.setAttribute('aria-label', 'Arka plan değiştir');
    button.setAttribute('title', 'Arka planı değiştir');
    button.innerHTML =
      '<svg width="22" height="22" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M1.5 11l3.5-4 2.5 3 2-2.5L14.5 13" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10.5" cy="5" r="1.5" stroke="currentColor" stroke-width="1.2"/></svg>';
    bindBackgroundButton(button);

    if (themeButton && themeButton.nextSibling) {
      controls.insertBefore(button, themeButton.nextSibling);
      return;
    }

    controls.appendChild(button);
  }

  window.setTheme = function (theme) {
    return applyThemeValue(theme);
  };

  window.applyTheme = function (theme) {
    return applyThemeValue(theme);
  };

  window.toggleTheme = function () {
    return applyThemeValue(getCurrentTheme() === 'dark' ? 'light' : 'dark');
  };

  window.setBackgroundVariant = function (index) {
    return applyBackgroundValue(index);
  };

  window.cycleBackgroundVariant = function () {
    return applyBackgroundValue(getCurrentBgIndex() + 1);
  };

  window.cycleHeroBg = function () {
    return window.cycleBackgroundVariant();
  };

  applyThemeValue(readStorage(THEME_STORAGE_KEY) || getCurrentTheme());
  applyBackgroundValue(readStorage(BG_STORAGE_KEY) || getCurrentBgIndex());

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureBackgroundButton, { once: true });
  } else {
    ensureBackgroundButton();
  }
})();

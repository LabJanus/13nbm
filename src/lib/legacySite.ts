import type { Metadata } from 'next';
import { readFileSync } from 'node:fs';
import path from 'node:path';

export const legacyPages = [
  { slug: '', route: '/', fileName: 'index.html' },
  { slug: 'features', route: '/features', fileName: 'features.html' },
  { slug: 'paas', route: '/paas', fileName: 'paas.html' },
  { slug: 'paas-sss', route: '/paas-sss', fileName: 'paas-sss.html' },
  { slug: 'certified', route: '/certified', fileName: 'certified.html' },
  { slug: 'paket-1', route: '/paket-1', fileName: 'paket-1.html' },
  { slug: 'paket-2', route: '/paket-2', fileName: 'paket-2.html' },
  { slug: 'paket-3', route: '/paket-3', fileName: 'paket-3.html' },
  { slug: 'paket-custom', route: '/paket-custom', fileName: 'paket-custom.html' },
  {
    slug: 'gizlilik-politikasi',
    route: '/gizlilik-politikasi',
    fileName: 'gizlilik-politikasi.html',
  },
  {
    slug: 'kvkk-aydinlatma',
    route: '/kvkk-aydinlatma',
    fileName: 'kvkk-aydinlatma.html',
  },
  { slug: 'cerez-politikasi', route: '/cerez-politikasi', fileName: 'cerez-politikasi.html' },
] as const;

export type LegacyPageSlug = (typeof legacyPages)[number]['slug'];

type LegacyPage = {
  description?: string;
  markup: string;
  title: string;
};

const SHARED_LEGACY_ASSETS = ['<link rel="stylesheet" href="/site-footer.css"/>'];

const LEGAL_PAGE_LABELS: Partial<Record<LegacyPageSlug, string>> = {
  'gizlilik-politikasi': 'Gizlilik Politikası',
  'kvkk-aydinlatma': 'KVKK Aydınlatma',
  'cerez-politikasi': 'Çerez Politikası',
};

const SHARED_HEADER_LABELS: Partial<Record<LegacyPageSlug, string>> = {
  features: 'Features',
  paas: 'Platform (PaaS)',
  'paas-sss': 'PaaS SSS',
  certified: 'Nebim Certified',
  'paket-1': 'Paket 1',
  'paket-2': 'Paket 2',
  'paket-3': 'Paket 3',
  'paket-custom': 'Custom',
  ...LEGAL_PAGE_LABELS,
};

const LEGACY_STANDARD_FOOTER = `
<footer class="site-footer">
  <div class="ft-grid">
    <div class="ft-brand">
      <div class="ft-brand-lockup">
        <img src="img/era_logo_final.svg" alt="Nebim ERA" class="ft-era-logo">
      </div>
      <p class="t-xs t2 ft-brand-copy">Türkiye'nin ilk yerel bütünleşik perakende platformu. Fiziksel mağaza, e-ticaret ve pazaryeri tek platformda.</p>
      <div class="ft-brand-meta">
        <div class="ft-partners">
          <img src="img/nebim_logo.svg" alt="Nebim" class="ft-param">
          <span class="ft-partner-divider"></span>
          <span class="ft-partner-note">a</span>
          <a href="https://param.com.tr" target="_blank" rel="noopener" aria-label="Param Grubu" class="ft-partner-link"><img src="img/param-logo.svg" alt="Param Grubu" class="ft-param"></a>
          <span class="ft-partner-note">company</span>
        </div>
      </div>
    </div>

    <div>
      <div class="ft-col-title">NEBİM ERA</div>
      <div class="ft-links">
        <a href="index.html" class="t-xs t2 ft-link">Genel Bakış</a>
        <a href="features.html" class="t-xs t2 ft-link">Tüm Özellikler</a>
        <a href="paas.html" class="t-xs t2 ft-link">Platform (PaaS)</a>
        <a href="certified.html" class="t-xs t2 ft-link">Certified</a>
      </div>
    </div>

    <div>
      <div class="ft-col-title">PAKETLER</div>
      <div class="ft-links">
        <a href="paket-1.html" class="t-xs t2 ft-link">Paket 1</a>
        <a href="paket-2.html" class="t-xs t2 ft-link">Paket 2</a>
        <a href="paket-3.html" class="t-xs t2 ft-link">Paket 3</a>
        <a href="paket-custom.html" class="t-xs t2 ft-link">Custom</a>
      </div>
    </div>

    <div>
      <div class="ft-col-title">NEBİM</div>
      <div class="ft-links">
        <a href="#" class="t-xs t2 ft-link">Nebim Hakkında</a>
        <a href="#" class="t-xs t2 ft-link">İş Ortakları</a>
        <a href="#" class="t-xs t2 ft-link">Kariyer</a>
        <a href="#" class="t-xs t2 ft-link">İletişim</a>
      </div>
    </div>
  </div>

  <div class="ft-divider"></div>
  <div class="ft-bottom">
    <span class="t-xs t3">© 2026 Nebim Neyir Bilgisayar Sanayii ve Hizmetleri A.Ş. Tüm hakları saklıdır.</span>
    <div class="flex gap4">
      <a href="gizlilik-politikasi.html" class="t-xs t3 ft-link">Gizlilik Politikası</a>
      <a href="kvkk-aydinlatma.html" class="t-xs t3 ft-link">KVKK Aydınlatma</a>
      <a href="cerez-politikasi.html" class="t-xs t3 ft-link">Çerez Politikası</a>
    </div>
  </div>
</footer>
`;

const SHARED_STANDARD_HEADER_BEHAVIOR = `
<script>
(function(){
  const nav = document.getElementById('nav');
  const topBar = document.querySelector('.top-bar');
  const themeButtons = document.querySelectorAll('.js-theme-toggle');
  if (!nav) return;

  themeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (typeof toggleTheme === 'function') {
        toggleTheme();
      }
    });
  });

  let lastY = 0;
  let scrollAcc = 0;
  const hideThreshold = 75;

  window.addEventListener('scroll', function () {
    const y = window.scrollY;
    const bcBottom = topBar ? topBar.offsetTop + topBar.offsetHeight : 0;
    nav.classList.toggle('sc', y > 10);
    nav.classList.toggle('nav-top', y > bcBottom);
    const delta = y - lastY;

    if (delta > 0) {
      scrollAcc += delta;
    } else {
      scrollAcc = 0;
      nav.classList.remove('hide');
    }

    if (scrollAcc > hideThreshold) {
      nav.classList.add('hide');
    }

    lastY = y;
  }, { passive: true });
})();
</script>
`;

const LEGACY_THEME_BACKGROUND_BEHAVIOR = `
<script src="/site-theme-runtime.js"></script>
`;

const LEGACY_MOBILE_NAV_BEHAVIOR = `
<script>
(function(){
  const nav = document.getElementById('nav');
  if (!nav || window.__eraMobileDrawerInit) return;
  window.__eraMobileDrawerInit = true;

  const originalButton = nav.querySelector('.nav-mob');
  const navMenu = nav.querySelector('.nav-menu');
  if (!originalButton || !navMenu) return;

  const mobileButton = originalButton.cloneNode(true);
  originalButton.replaceWith(mobileButton);
  mobileButton.setAttribute('type', 'button');
  mobileButton.setAttribute('aria-expanded', 'false');
  mobileButton.setAttribute('aria-controls', 'mobile-nav-drawer');

  const shell = document.createElement('div');
  shell.className = 'nav-drawer-shell';
  shell.hidden = true;
  shell.innerHTML =
    '<button type="button" class="nav-drawer-backdrop" aria-label="Menüyü kapat"></button>' +
    '<aside class="nav-drawer" id="mobile-nav-drawer" aria-modal="true" role="dialog" aria-label="Mobil menü">' +
      '<div class="nav-drawer-head">' +
        '<div class="nav-drawer-brand"></div>' +
        '<button type="button" class="nav-drawer-close" aria-label="Menüyü kapat">' +
          '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5 5 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>' +
        '</button>' +
      '</div>' +
      '<div class="nav-drawer-body"></div>' +
      '<div class="nav-drawer-foot"></div>' +
    '</aside>';
  document.body.appendChild(shell);

  const drawer = shell.querySelector('.nav-drawer');
  const backdrop = shell.querySelector('.nav-drawer-backdrop');
  const closeButton = shell.querySelector('.nav-drawer-close');
  const drawerBody = shell.querySelector('.nav-drawer-body');
  const drawerFoot = shell.querySelector('.nav-drawer-foot');
  const drawerBrand = shell.querySelector('.nav-drawer-brand');
  const logoSource = nav.querySelector('.nav-logo');
  const html = document.documentElement;
  const pageSections = document.querySelector('.sec-nav');
  const themeSource = nav.querySelector('.js-theme-toggle') || nav.querySelector('.theme-ico[aria-label="Tema"]');
  const hasHeroBackgroundControl = typeof cycleBackgroundVariant === 'function' || typeof cycleHeroBg === 'function';
  let restoreFocusTo = null;
  let hideTimer = null;

  if (logoSource) {
    drawerBrand.appendChild(logoSource.cloneNode(true));
  } else {
    drawerBrand.textContent = 'Nebim ERA';
  }

  function createSection(title) {
    const section = document.createElement('section');
    section.className = 'nav-drawer-section';

    if (title) {
      const label = document.createElement('div');
      label.className = 'nav-drawer-label';
      label.textContent = title;
      section.appendChild(label);
    }

    return section;
  }

  const menuSection = createSection('Menü');
  const menuClone = navMenu.cloneNode(true);
  menuClone.classList.add('nav-drawer-menu');

  menuClone.querySelectorAll('.nav-item').forEach(function(item){
    const trigger = item.querySelector('.nav-lnk, .nav-trigger');
    const dropdown = item.querySelector('.nav-dd');
    if (!trigger || !dropdown) return;

    item.classList.add('has-submenu');

    if (trigger.tagName === 'A') {
      trigger.removeAttribute('href');
    }

    trigger.removeAttribute('onclick');
    trigger.setAttribute('role', 'button');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.classList.add('drawer-submenu-trigger');

    const chevron = document.createElement('span');
    chevron.className = 'nav-drawer-chevron';
    chevron.setAttribute('aria-hidden', 'true');
    trigger.appendChild(chevron);

    trigger.addEventListener('click', function(event){
      event.preventDefault();
      const isOpen = item.classList.toggle('is-expanded');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });
  });

  menuSection.appendChild(menuClone);
  drawerBody.appendChild(menuSection);

  if (pageSections) {
    const pills = Array.from(pageSections.querySelectorAll('a.sec-pill[href]'));
    if (pills.length) {
      const section = createSection('Bu Sayfada');
      const pillWrap = document.createElement('div');
      pillWrap.className = 'nav-drawer-pills';

      pills.forEach(function(pill){
        const pillClone = pill.cloneNode(true);
        pillClone.classList.remove('active');
        pillClone.classList.add('nav-drawer-pill');
        pillWrap.appendChild(pillClone);
      });

      section.appendChild(pillWrap);
      drawerBody.appendChild(section);
    }
  }

  function createActionButton(options) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nav-drawer-theme';
    button.setAttribute('aria-label', options.label);
    button.innerHTML =
      '<span class="nav-drawer-theme-ico" aria-hidden="true">' + options.icon + '</span>' +
      '<span class="nav-drawer-theme-text">' + options.label + '</span>';
    button.addEventListener('click', function(event){
      event.preventDefault();
      options.onClick();
    });
    return button;
  }

  if (themeSource || hasHeroBackgroundControl) {
    const actionGroup = document.createElement('div');
    actionGroup.className = 'nav-drawer-actions';

    if (themeSource) {
      actionGroup.appendChild(createActionButton({
        label: 'Temayı değiştir',
        icon: '<svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M13.5 10.5A6 6 0 0 1 5.5 2.5a6 6 0 1 0 8 8z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        onClick: function() {
          if (typeof toggleTheme === 'function') {
            toggleTheme();
          } else {
            themeSource.click();
          }
        },
      }));
    }

    if (hasHeroBackgroundControl) {
      actionGroup.appendChild(createActionButton({
        label: 'Arka planı değiştir',
        icon: '<svg width="18" height="18" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M1.5 11l3.5-4 2.5 3 2-2.5L14.5 13" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10.5" cy="5" r="1.5" stroke="currentColor" stroke-width="1.2"/></svg>',
        onClick: function() {
          if (typeof cycleBackgroundVariant === 'function') {
            cycleBackgroundVariant();
            return;
          }

          if (typeof cycleHeroBg === 'function') {
            cycleHeroBg();
          }
        },
      }));
    }

    drawerFoot.appendChild(actionGroup);
  }

  function clearHideTimer() {
    if (hideTimer) {
      window.clearTimeout(hideTimer);
      hideTimer = null;
    }
  }

  function openDrawer() {
    clearHideTimer();
    restoreFocusTo = document.activeElement instanceof HTMLElement ? document.activeElement : mobileButton;
    shell.hidden = false;
    requestAnimationFrame(function(){
      shell.classList.add('is-open');
      html.classList.add('nav-drawer-open');
      document.body.classList.add('nav-drawer-open');
      mobileButton.classList.add('open');
      mobileButton.setAttribute('aria-expanded', 'true');
    });
    closeButton.focus();
  }

  function closeDrawer(skipFocusRestore) {
    clearHideTimer();
    shell.classList.remove('is-open');
    html.classList.remove('nav-drawer-open');
    document.body.classList.remove('nav-drawer-open');
    mobileButton.classList.remove('open');
    mobileButton.setAttribute('aria-expanded', 'false');
    hideTimer = window.setTimeout(function(){
      shell.hidden = true;
    }, 220);

    if (!skipFocusRestore && restoreFocusTo && typeof restoreFocusTo.focus === 'function') {
      restoreFocusTo.focus();
    }
  }

  mobileButton.addEventListener('click', function(event){
    event.preventDefault();
    if (shell.classList.contains('is-open')) {
      closeDrawer();
      return;
    }
    openDrawer();
  });

  backdrop.addEventListener('click', function(){
    closeDrawer();
  });

  closeButton.addEventListener('click', function(){
    closeDrawer();
  });

  drawer.addEventListener('click', function(event){
    const clickedLink = event.target.closest('a[href]');
    if (!clickedLink) return;
    closeDrawer(true);
  });

  document.addEventListener('keydown', function(event){
    if (event.key === 'Escape' && shell.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  window.addEventListener('resize', function(){
    if (window.innerWidth >= 1024 && shell.classList.contains('is-open')) {
      closeDrawer(true);
    }
  });
})();
</script>
`;

const legacySourceDir = path.join(process.cwd(), 'src/content/legacy-pages');
const pagesBySlug = new Map(legacyPages.map((page) => [page.slug, page]));
const routeByFileName = new Map<string, string>(legacyPages.map((page) => [page.fileName, page.route]));
const pageCache = new Map<LegacyPageSlug, LegacyPage>();
const shouldCacheLegacyPages = process.env.NODE_ENV === 'production';

export const legacyStaticSlugs = legacyPages
  .filter((page) => page.slug !== '')
  .map((page) => page.slug);

export function isLegacyPageSlug(slug: string): slug is LegacyPageSlug {
  return pagesBySlug.has(slug as LegacyPageSlug);
}

export function getLegacyPage(slug: LegacyPageSlug): LegacyPage {
  const cachedPage = shouldCacheLegacyPages ? pageCache.get(slug) : undefined;

  if (cachedPage) {
    return cachedPage;
  }

  const page = pagesBySlug.get(slug);

  if (!page) {
    throw new Error(`Unknown legacy page: ${slug}`);
  }

  const source = readFileSync(path.join(legacySourceDir, page.fileName), 'utf8');
  const parsedPage = parseLegacyPage(source, slug);

  if (shouldCacheLegacyPages) {
    pageCache.set(slug, parsedPage);
  }

  return parsedPage;
}

export function getLegacyPageMetadata(slug: LegacyPageSlug): Metadata {
  const page = getLegacyPage(slug);

  return {
    title: page.title,
    description: page.description,
  };
}

function parseLegacyPage(source: string, slug: LegacyPageSlug): LegacyPage {
  const title = source.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? 'Nebim ERA';
  const description = extractMetaDescription(source);

  const headContent = source.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? '';
  const bodyContent = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? source;
  const headAssets = headContent.match(/<link\b[\s\S]*?>|<style\b[\s\S]*?<\/style>|<script\b[\s\S]*?<\/script>/gi) ?? [];
  const standardizedBody = standardizeLegacyChrome(bodyContent, slug);

  return {
    title,
    description,
    markup: normalizeLegacyMarkup(
      [...headAssets, ...getSharedLegacyAssets(slug), standardizedBody].join('\n'),
    ),
  };
}

function extractMetaDescription(source: string): string | undefined {
  const descriptionTag = source.match(/<meta\s+[^>]*name=["']description["'][^>]*>/i)?.[0];

  return descriptionTag?.match(/\scontent=(["'])([\s\S]*?)\1/i)?.[2]?.trim();
}

function normalizeLegacyMarkup(markup: string): string {
  return rewriteQuotedUrls(rewriteCssUrls(rewriteAttributes(markup)));
}

function getSharedLegacyAssets(slug: LegacyPageSlug): string[] {
  const sharedAssets = [...SHARED_LEGACY_ASSETS];

  if (slug !== '') {
    sharedAssets.push('<link rel="stylesheet" href="/site-header.css"/>');
  }

  sharedAssets.push('<link rel="stylesheet" href="/site-background.css"/>');
  sharedAssets.push('<link rel="stylesheet" href="/site-mobile-nav.css"/>');

  return sharedAssets;
}

function standardizeLegacyChrome(markup: string, slug: LegacyPageSlug): string {
  let normalizedMarkup = normalizeLegacyThemeBackgroundState(upsertStandardFooter(markup));

  if (slug !== '') {
    normalizedMarkup = standardizeSharedHeader(
      normalizedMarkup,
      SHARED_HEADER_LABELS[slug] ?? 'Nebim ERA',
    );
    normalizedMarkup = normalizedMarkup.replace(/<button class="theme-toggle"[\s\S]*?<\/button>/i, '');
    normalizedMarkup = applyHeaderStageClass(normalizedMarkup, slug);
    normalizedMarkup += SHARED_STANDARD_HEADER_BEHAVIOR;
  }

  normalizedMarkup += LEGACY_THEME_BACKGROUND_BEHAVIOR;
  normalizedMarkup += LEGACY_MOBILE_NAV_BEHAVIOR;

  return normalizedMarkup;
}

function standardizeSharedHeader(markup: string, currentLabel: string): string {
  const header = buildStandardLegalHeader(currentLabel);

  if (/<nav class="legal-nav">[\s\S]*?<\/nav>/i.test(markup)) {
    return markup.replace(/<nav class="legal-nav">[\s\S]*?<\/nav>/i, header);
  }

  if (/<div class="top-bar"[\s\S]*?<nav class="nav"[^>]*id=["']nav["'][\s\S]*?<\/nav>/i.test(markup)) {
    return markup.replace(
      /<div class="top-bar"[\s\S]*?<nav class="nav"[^>]*id=["']nav["'][\s\S]*?<\/nav>/i,
      header,
    );
  }

  return `${header}\n${markup.trimStart()}`;
}

function buildStandardLegalHeader(currentLabel: string): string {
  return `
<div class="top-bar" id="top-bar">
  <ol class="bc" aria-label="Sayfa yolu">
    <li class="bc-item">
      <a href="https://nebim.com.tr" class="bc-link">nebim.com.tr</a>
    </li>
    <li class="bc-item">
      <span class="bc-sep" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2.5l3.5 3.5L4 9.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
    </li>
    <li class="bc-item">
      <a href="index.html" class="bc-link">Nebim ERA</a>
    </li>
    <li class="bc-item">
      <span class="bc-sep" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2.5l3.5 3.5L4 9.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
    </li>
    <li class="bc-item active">
      <span class="bc-dot"></span>
      <span class="bc-link">${currentLabel}</span>
    </li>
  </ol>
  <div class="bc-act"></div>
</div>

<nav class="nav" id="nav">
  <div class="nav-i">
    <a href="index.html" class="nav-logo" aria-label="Nebim ERA">
      <img src="img/era_logo_final.svg" alt="Nebim ERA" class="nav-wordmark">
    </a>
    <ul class="nav-menu">
      <li class="nav-item"><a href="index.html" class="nav-lnk">GENEL BAKIŞ</a></li>
      <li class="nav-item"><a href="features.html" class="nav-lnk">NEBİM ERA'YI KEŞFEDİN</a></li>
      <li class="nav-item"><a href="paas.html" class="nav-lnk">PLATFORM (PaaS)</a></li>
      <li class="nav-item">
        <button type="button" class="nav-lnk nav-trigger" aria-haspopup="true" aria-expanded="false">PAKETLER</button>
        <div class="nav-dd">
          <a href="paket-1.html" class="nav-dd-i"><span class="dd-dot"></span>Paket 1</a>
          <a href="paket-2.html" class="nav-dd-i"><span class="dd-dot"></span>Paket 2</a>
          <a href="paket-3.html" class="nav-dd-i"><span class="dd-dot"></span>Paket 3</a>
          <div class="nav-dd-div"></div>
          <a href="paket-custom.html" class="nav-dd-i"><span class="dd-dot"></span>Custom</a>
        </div>
      </li>
      <li class="nav-item"><a href="certified.html" class="nav-lnk">NEBİM CERTIFIED</a></li>
    </ul>
    <button type="button" class="nav-mob" aria-label="Menü">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 5.5h16M3 11h16M3 16.5h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    </button>
    <div class="nav-ctrls">
      <button type="button" class="theme-ico js-theme-toggle" aria-label="Tema">
        <svg class="ico-moon" width="22" height="22" viewBox="0 0 16 16" fill="none"><path d="M13.5 10.5A6 6 0 0 1 5.5 2.5a6 6 0 1 0 8 8z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <svg class="ico-sun" width="22" height="22" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.3"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
      </button>
      <button type="button" class="theme-ico js-bg-toggle" aria-label="Arka plan değiştir" title="Arka planı değiştir" onclick="if (typeof cycleBackgroundVariant === 'function') { cycleBackgroundVariant(); } else if (typeof cycleHeroBg === 'function') { cycleHeroBg(); }">
        <svg width="22" height="22" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M1.5 11l3.5-4 2.5 3 2-2.5L14.5 13" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10.5" cy="5" r="1.5" stroke="currentColor" stroke-width="1.2"/></svg>
      </button>
    </div>
  </div>
</nav>
`;
}

function upsertStandardFooter(markup: string): string {
  if (/<footer class="site-footer"[\s\S]*?<\/footer>/i.test(markup)) {
    return markup.replace(/<footer class="site-footer"[\s\S]*?<\/footer>/i, LEGACY_STANDARD_FOOTER);
  }

  return `${markup.trimEnd()}\n\n${LEGACY_STANDARD_FOOTER}`;
}

function normalizeLegacyThemeBackgroundState(markup: string): string {
  return markup
    .replace(
      /var _eraTheme = 'dark';(?:\s*\/\*[\s\S]*?\*\/)?/g,
      "var _eraTheme = window.__eraTheme || (document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');",
    )
    .replace(
      /\bvar _t = 'dark';/g,
      "var _t = window.__eraTheme || (document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');",
    )
    .replace(
      /\bvar _heroBgIdx = 0;/g,
      "var _heroBgIdx = typeof window.__eraBgIndex === 'number' ? window.__eraBgIndex : (Number.parseInt(document.documentElement.getAttribute('data-era-bg-index') || '0', 10) || 0);\nvar _heroBgInit = document.querySelector('.hero-teams');\nif (_heroBgInit && Array.isArray(_heroBgs) && _heroBgs[_heroBgIdx]) {\n  _heroBgInit.style.setProperty('--hero-bg', 'url(' + _heroBgs[_heroBgIdx] + ')');\n}",
    )
    .replace(
      /function cycleHeroBg\(\)\{\s*_heroBgIdx = \(_heroBgIdx \+ 1\) % _heroBgs\.length;\s*var hero = document\.querySelector\('\.hero-teams'\);\s*if\(!hero\) return;\s*hero\.style\.setProperty\('--hero-bg','url\(' \+ _heroBgs\[_heroBgIdx\] \+ '\)'\);\s*\}/g,
      "function cycleHeroBg(){\n  if (typeof window.cycleBackgroundVariant === 'function') {\n    _heroBgIdx = window.cycleBackgroundVariant();\n    return _heroBgIdx;\n  }\n  _heroBgIdx = (_heroBgIdx + 1) % _heroBgs.length;\n  var hero = document.querySelector('.hero-teams');\n  if(!hero) return _heroBgIdx;\n  hero.style.setProperty('--hero-bg','url(' + _heroBgs[_heroBgIdx] + ')');\n  return _heroBgIdx;\n}",
    );
}

function applyHeaderStageClass(markup: string, slug: LegacyPageSlug): string {
  switch (slug) {
    case 'features':
      return markup.replace(/class="feat-page-header"/i, 'class="feat-page-header era-header-stage"');
    case 'paas':
      return markup.replace(
        /<section class="sec sec-dark" id="hero"/i,
        '<section class="sec sec-dark era-header-stage" id="hero"',
      );
    case 'paas-sss':
      return markup.replace(/class="sss-header"/i, 'class="sss-header era-header-stage"');
    case 'certified':
      return markup.replace(
        /<section class="sec sec-panel" style="padding-top:clamp\(16px,2vw,28px\);">/i,
        '<section class="sec sec-panel era-header-stage" style="padding-top:clamp(16px,2vw,28px);">',
      );
    case 'paket-1':
    case 'paket-2':
    case 'paket-3':
    case 'paket-custom':
      return markup.replace(
        /class="sec sec-dark pkgf-hero-section"/i,
        'class="sec sec-dark pkgf-hero-section era-header-stage"',
      );
    case 'gizlilik-politikasi':
    case 'kvkk-aydinlatma':
    case 'cerez-politikasi':
      return markup.replace(/class="legal-header"/i, 'class="legal-header era-header-stage"');
    default:
      return markup;
  }
}

function rewriteAttributes(markup: string): string {
  return markup.replace(/\b(href|src)=("([^"]*)"|'([^']*)')/gi, (match, attribute: string, quotedValue: string) => {
    const quote = quotedValue[0];
    const value = quotedValue.slice(1, -1);

    return `${attribute}=${quote}${rewriteUrl(value)}${quote}`;
  });
}

function rewriteCssUrls(markup: string): string {
  return markup.replace(/url\(\s*(["']?)([^"')]+)\1\s*\)/gi, (match, quote: string, value: string) => {
    return `url(${quote}${rewriteUrl(value.trim())}${quote})`;
  });
}

function rewriteQuotedUrls(markup: string): string {
  return markup.replace(
    /(["'])(\.?\/?(?:assets|img|vids)\/[^"']+|\.?\/?design-tokens\.css|\.?\/?[a-z0-9-]+\.html(?:[#?][^"']*)?)\1/gi,
    (match, quote: string, value: string) => `${quote}${rewriteUrl(value)}${quote}`,
  );
}

function rewriteUrl(value: string): string {
  if (
    value === '' ||
    value.startsWith('#') ||
    value.startsWith('/') ||
    value.startsWith('data:') ||
    value.startsWith('mailto:') ||
    value.startsWith('tel:') ||
    /^[a-z][a-z0-9+.-]*:/i.test(value)
  ) {
    return value;
  }

  const normalizedValue = value.replace(/^\.\//, '');

  if (normalizedValue === 'design-tokens.css') {
    return '/design-tokens.css';
  }

  if (/^(assets|img|vids)\//i.test(normalizedValue)) {
    return `/${normalizedValue}`;
  }

  const htmlMatch = normalizedValue.match(/^([a-z0-9-]+\.html)([#?].*)?$/i);

  if (!htmlMatch) {
    return value;
  }

  const route = routeByFileName.get(htmlMatch[1]);

  return route ? `${route}${htmlMatch[2] ?? ''}` : value;
}

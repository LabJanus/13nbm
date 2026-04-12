'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import styles from './Nav.module.css';

const menuItems = [
  { label: 'GENEL BAKIŞ', href: '/#s1' },
  { label: "NEBİM ERA'YI KEŞFEDİN", href: '/features' },
  { label: 'PLATFORM (PaaS)', href: '/paas' },
  { label: 'NEBİM CERTIFIED', href: '/certified' },
];

const paketItems = [
  { label: 'Paket 1', href: '/paket/paket-1' },
  { label: 'Paket 2', href: '/paket/paket-2' },
  { label: 'Paket 3', href: '/paket/paket-3' },
  { label: 'Custom', href: '/paket/custom' },
];

export function Nav() {
  const { isHidden, isScrolled, isAtTop } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  const navClass = [
    styles.nav,
    isHidden && !mobileOpen ? styles.hide : '',
    isScrolled ? styles.sc : '',
    isAtTop ? styles.navTop : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navClass} id="nav">
        <div className={styles.travel}></div>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="Nebim ERA">
            <Image src="/img/era_logo_final.svg" alt="Nebim ERA" width={138} height={28} className={styles.wordmark} />
          </Link>

          {/* Desktop Menu */}
          <ul className={styles.menu}>
            {menuItems.slice(0, 3).map((item) => (
              <li key={item.href} className={styles.item}>
                <Link href={item.href} className={styles.lnk}>{item.label}</Link>
              </li>
            ))}
            <li className={styles.item}>
              <span className={styles.lnk}>PAKETLER</span>
              <div className={styles.dd}>
                {paketItems.slice(0, 3).map((p) => (
                  <Link key={p.href} href={p.href} className={styles.ddItem}>
                    <span className={styles.ddDot}></span>{p.label}
                  </Link>
                ))}
                <div className={styles.ddDiv}></div>
                <Link href="/paket/custom" className={styles.ddItem}>
                  <span className={styles.ddDot}></span>Custom
                </Link>
              </div>
            </li>
            <li className={styles.item}>
              <Link href="/certified" className={styles.lnk}>NEBİM CERTIFIED</Link>
            </li>
          </ul>

          <div className={styles.ctrls}>
            <ThemeToggle />
          </div>

          {/* Hamburger — sağda */}
          <button
            type="button"
            className={styles.mob}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menü'}
            aria-expanded={mobileOpen ? "true" : "false"}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileOpen ? (
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              ) : (
                <path d="M3 5.5h16M3 11h16M3 16.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer — sağdan sola açılır */}
      <div
        className={`${styles.overlay} ${mobileOpen ? styles.overlayOpen : ''}`}
        onClick={close}
        aria-hidden="true"
      />
      <div className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerInner}>
          <div className={styles.drawerNav}>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.drawerLink}
                onClick={close}
              >
                {item.label}
              </Link>
            ))}

            <div className={styles.drawerGroup}>
              <span className={styles.drawerLabel}>PAKETLER</span>
              {paketItems.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className={styles.drawerSubLink}
                  onClick={close}
                >
                  <span className={styles.drawerDot}></span>
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.drawerFooter}>
            <Link href="/#s7" className="btn btn-grad btn-lg" onClick={close} style={{ width: '100%', justifyContent: 'center' }}>
              Satış Ekibiyle Konuş
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

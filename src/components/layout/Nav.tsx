'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import styles from './Nav.module.css';

export function Nav() {
  const { isHidden, isScrolled, isAtTop } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navClass = [
    styles.nav,
    isHidden ? styles.hide : '',
    isScrolled ? styles.sc : '',
    isAtTop ? styles.navTop : '',
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClass} id="nav">
      <div className={styles.travel}></div>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Nebim ERA">
          <Image src="/img/era_logo_final.svg" alt="Nebim ERA" width={138} height={28} className={styles.wordmark} />
        </Link>

        <ul className={styles.menu}>
          <li className={styles.item}><Link href="/#s1" className={styles.lnk}>GENEL BAKIŞ</Link></li>
          <li className={styles.item}><Link href="/features" className={styles.lnk}>NEBİM ERA&apos;YI KEŞFEDİN</Link></li>
          <li className={styles.item}><Link href="/paas" className={styles.lnk}>PLATFORM (PaaS)</Link></li>
          <li className={styles.item}>
            <span className={styles.lnk}>PAKETLER</span>
            <div className={styles.dd}>
              <Link href="/paket/paket-1" className={styles.ddItem}><span className={styles.ddDot}></span>Paket 1</Link>
              <Link href="/paket/paket-2" className={styles.ddItem}><span className={styles.ddDot}></span>Paket 2</Link>
              <Link href="/paket/paket-3" className={styles.ddItem}><span className={styles.ddDot}></span>Paket 3</Link>
              <div className={styles.ddDiv}></div>
              <Link href="/paket/custom" className={styles.ddItem}><span className={styles.ddDot}></span>Custom</Link>
            </div>
          </li>
          <li className={styles.item}><Link href="/certified" className={styles.lnk}>NEBİM CERTIFIED</Link></li>
        </ul>

        <button
          className={styles.mob}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 5.5h16M3 11h16M3 16.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <div className={styles.ctrls}>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

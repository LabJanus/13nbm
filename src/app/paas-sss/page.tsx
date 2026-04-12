'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { AccordionItem } from '@/components/ui/AccordionItem';
import { paasFaqGroups, paasFaqItems } from '@/data/paasFaq';

function getInitialFaqId() {
  if (typeof window === 'undefined') {
    return paasFaqItems[0]?.id ?? '';
  }

  const hash = window.location.hash.replace('#', '');
  return hash && paasFaqItems.some((item) => item.id === hash) ? hash : paasFaqItems[0]?.id ?? '';
}

function getScrollOffset() {
  if (typeof window === 'undefined') {
    return 120;
  }

  const root = getComputedStyle(document.documentElement);
  const raw = root.getPropertyValue('--nav-total').trim();
  const parsed = Number.parseFloat(raw);

  return Number.isFinite(parsed) ? parsed + 32 : 120;
}

export default function PaasFaqPage() {
  const [openId, setOpenId] = useState<string>(() => getInitialFaqId());
  const [activeId, setActiveId] = useState<string>(() => getInitialFaqId());
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const allIds = useMemo(() => paasFaqItems.map((item) => item.id), []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');

    if (!hash || !allIds.includes(hash)) {
      return;
    }

    window.setTimeout(() => {
      const node = itemRefs.current[hash];
      const offset = getScrollOffset();

      if (!node) {
        return;
      }

      const top = node.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 120);
  }, [allIds]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 120;
      let currentId = allIds[0];

      allIds.forEach((id) => {
        const node = itemRefs.current[id];
        if (node && node.getBoundingClientRect().top < offset) {
          currentId = id;
        }
      });

      if (currentId) {
        setActiveId(currentId);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [allIds]);

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? '' : id));
    setActiveId(id);
  };

  const handleSidebarClick = (id: string) => {
    setOpenId(id);
    setActiveId(id);

    const node = itemRefs.current[id];
    if (!node) {
      return;
    }

    const offset = getScrollOffset();
    const top = node.getBoundingClientRect().top + window.scrollY - offset;

    window.history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.eyebrow}>Sikca Sorulan Sorular</div>
        <h1 className={styles.title}>Nebim ERA PaaS hakkinda{'\n'}merak ettiginiz her sey</h1>
        <p className={styles.desc}>Mimari, gelistirici deneyimi, veri entegrasyonu, guvenlik ve fiyatlandirma dahil olmak uzere en cok sorulan basliklari tek sayfada topladik.</p>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            {paasFaqGroups.map((group) => (
              <div key={group.id} className={styles.sidebarGroup}>
                <div className={styles.sidebarLabel}>{group.navLabel}</div>
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`${styles.sidebarLink} ${activeId === item.id ? styles.sidebarLinkActive : ''}`}
                    onClick={() => handleSidebarClick(item.id)}
                  >
                    <span className={styles.sidebarDot}></span>
                    {item.question}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </aside>

        <div className={styles.content}>
          {paasFaqGroups.map((group) => (
            <section key={group.id} className={styles.group}>
              <div className={styles.groupTitle}>
                <span
                  className={`${styles.groupDot} ${
                    group.accent === 'neb'
                      ? styles.dotNeb
                      : group.accent === 'purple'
                        ? styles.dotPurple
                        : styles.dotCyan
                  }`}
                ></span>
                {group.title}
              </div>

              {group.items.map((item) => (
                <div
                  key={item.id}
                  ref={(node) => {
                    itemRefs.current[item.id] = node;
                  }}
                >
                  <AccordionItem
                    id={item.id}
                    title={item.question}
                    isOpen={openId === item.id}
                    onToggle={handleToggle}
                  >
                    {item.answer}
                  </AccordionItem>
                </div>
              ))}
            </section>
          ))}

          <section id="cta" className={styles.cta}>
            <div className={styles.ctaEyebrow}>Daha Fazla Sorunuz mu Var?</div>
            <h2 className={styles.ctaTitle}>Cevabini bulamadiginiz sorulari memnuniyetle yanitlamaya haziriz</h2>
            <p className={styles.ctaDesc}>Nebim ERA PaaS hakkinda merak ettiginiz her konuda ekibimiz size yardimci olmaktan mutluluk duyacaktir.</p>
            <Link href="/paas#cta" className="btn btn-grad" style={{ padding: '12px 26px', fontSize: 14, borderRadius: 'var(--r-lg)' }}>
              Demo Talep Et
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}

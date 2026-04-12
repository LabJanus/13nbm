'use client';

import type { ReactNode } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import rawFeaturesData from '@/data/featuresData.json';
import styles from './page.module.css';

type FeatureCard = {
  title: string;
  description: string;
};

type FlatAccordion = {
  title: string;
  kind: 'flat';
  cards: FeatureCard[];
};

type NestedAccordion = {
  title: string;
  kind: 'nested';
  items: {
    title: string;
    cards: FeatureCard[];
  }[];
};

type FeaturesSection = {
  id: string;
  title: string;
  description: string;
  accordions: Array<FlatAccordion | NestedAccordion>;
};

type FeaturesData = {
  header: {
    title: string;
  };
  sections: FeaturesSection[];
};

const featuresData = rawFeaturesData as FeaturesData;

const sectionMeta: Record<
  string,
  {
    shortLabel: string;
    iconBg: string;
    iconColor: string;
    icon: ReactNode;
  }
> = {
  'cat-1': {
    shortLabel: 'Müşteri',
    iconBg: 'rgba(0,184,212,.12)',
    iconColor: 'var(--cyan)',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
      </svg>
    ),
  },
  'cat-2': {
    shortLabel: 'Ürün & Katalog',
    iconBg: 'rgba(26,95,180,.12)',
    iconColor: 'var(--neb)',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  'cat-3': {
    shortLabel: 'Stok',
    iconBg: 'rgba(26,95,180,.12)',
    iconColor: 'var(--neb)',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 8v13H3V8" />
        <path d="M1 3h22v5H1z" />
        <path d="M10 12h4" />
      </svg>
    ),
  },
  'cat-4': {
    shortLabel: 'Sipariş',
    iconBg: 'rgba(0,184,212,.12)',
    iconColor: 'var(--cyan)',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 8a2 2 0 0 0-2-2H5l-2 9h16l2-7z" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
    ),
  },
  'cat-5': {
    shortLabel: 'Satış Kanalları',
    iconBg: 'rgba(53,132,228,.12)',
    iconColor: 'var(--purple)',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  'cat-6': {
    shortLabel: 'Kampanya',
    iconBg: 'rgba(0,184,212,.12)',
    iconColor: 'var(--cyan)',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  'cat-7': {
    shortLabel: 'Ödeme',
    iconBg: 'rgba(53,132,228,.12)',
    iconColor: 'var(--purple)',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  'cat-8': {
    shortLabel: 'Analitik',
    iconBg: 'rgba(168,85,247,.12)',
    iconColor: '#9333EA',
    icon: (
      <svg viewBox="0 0 24 24">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
  'cat-9': {
    shortLabel: 'Destek',
    iconBg: 'rgba(239,68,68,.12)',
    iconColor: '#DC2626',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1v-7h3zm-18 0a2 2 0 0 0 2 2h1v-7H3z" />
      </svg>
    ),
  },
};

function getScrollOffset() {
  if (typeof window === 'undefined') {
    return 140;
  }

  const root = getComputedStyle(document.documentElement);
  const raw = root.getPropertyValue('--nav-total').trim();
  const parsed = Number.parseFloat(raw);

  return Number.isFinite(parsed) ? parsed + 24 : 140;
}

function getCardIcon(index: number) {
  const icons = [
    <svg key="a" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>,
    <svg key="b" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /></svg>,
    <svg key="c" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>,
    <svg key="d" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
    <svg key="e" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  ];

  return icons[index % icons.length];
}

export function FeaturesPageClient() {
  const [activeSectionId, setActiveSectionId] = useState(featuresData.sections[0]?.id ?? '');
  const [openAccordions, setOpenAccordions] = useState<Record<string, number | null>>({});
  const [openMiniAccordions, setOpenMiniAccordions] = useState<Record<string, Record<number, boolean>>>({});
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const sectionIds = useMemo(() => featuresData.sections.map((section) => section.id), []);

  useEffect(() => {
    const onScroll = () => {
      const offset = 180;
      let current = sectionIds[0];

      sectionIds.forEach((id) => {
        const node = sectionRefs.current[id];
        if (node && node.getBoundingClientRect().top < offset) {
          current = id;
        }
      });

      if (current) {
        setActiveSectionId(current);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  const handleTabClick = (id: string) => {
    const node = sectionRefs.current[id];
    if (!node) {
      return;
    }

    setActiveSectionId(id);
    const offset = getScrollOffset();
    const top = node.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const toggleAccordion = (sectionId: string, accordionIndex: number) => {
    setOpenAccordions((current) => ({
      ...current,
      [sectionId]: current[sectionId] === accordionIndex ? null : accordionIndex,
    }));
  };

  const toggleMiniAccordion = (sectionId: string, accordionIndex: number, miniIndex: number) => {
    const key = `${sectionId}-${accordionIndex}`;
    setOpenMiniAccordions((current) => ({
      ...current,
      [key]: {
        ...(current[key] ?? {}),
        [miniIndex]: !(current[key] ?? {})[miniIndex],
      },
    }));
  };

  const toggleCard = (cardKey: string) => {
    setOpenCards((current) => ({
      ...current,
      [cardKey]: !current[cardKey],
    }));
  };

  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <div className={`wrap ${styles.headerInner}`}>
          <nav className={styles.breadcrumb} aria-label="Sayfa yolu">
            <a href="/" className={styles.bcLink}>Nebim ERA</a>
            <span className={styles.bcSep} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className={styles.bcCurrent}>Tüm Özellikler</span>
          </nav>
          <h1 className={styles.headerTitle}>
            <span className="grad-text">160&apos;tan Fazla Özellik ile</span> Fiziksel Mağaza, E-Ticaret ve Pazaryeri Süreçlerinizi Eksiksiz Yönetin.
          </h1>
        </div>
      </section>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          {featuresData.sections.map((section) => {
            const meta = sectionMeta[section.id];

            return (
              <button
                key={section.id}
                type="button"
                className={`${styles.tab} ${activeSectionId === section.id ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(section.id)}
              >
                <span className={styles.tabIcon} style={{ color: meta.iconColor }}>
                  {meta.icon}
                </span>
                <span className={styles.tabLabel}>{meta.shortLabel}</span>
              </button>
            );
          })}
        </aside>

        <div className={styles.content}>
          {featuresData.sections.map((section) => {
            const meta = sectionMeta[section.id];

            return (
              <section
                key={section.id}
                id={section.id}
                className={styles.section}
                ref={(node) => {
                  sectionRefs.current[section.id] = node;
                }}
              >
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIcon} style={{ color: meta.iconColor }}>
                    {meta.icon}
                  </div>
                  <div>
                    <h2 className={`t-h2 ${styles.sectionTitle}`}>{section.title}</h2>
                    <p className={styles.sectionDesc}>{section.description}</p>
                  </div>
                </div>

                {section.accordions.map((accordion, accordionIndex) => {
                  const isAccordionOpen = openAccordions[section.id] === accordionIndex;
                  const accordionKey = `${section.id}-${accordionIndex}`;
                  const showSoonBadge = accordion.title.includes('Yakında');
                  const cleanTitle = accordion.title.replace(' Yakında', '');

                  return (
                    <div
                      key={accordion.title}
                      className={`${styles.accordionGroup} ${isAccordionOpen ? styles.accordionOpen : ''}`}
                    >
                      <button
                        type="button"
                        className={styles.accordionButton}
                        onClick={() => toggleAccordion(section.id, accordionIndex)}
                        aria-expanded={isAccordionOpen ? "true" : "false"}
                      >
                        <div className={styles.accordionButtonLeft}>
                          <div className={styles.accordionIcon}>{meta.icon}</div>
                          <div className={styles.accordionTitleWrap}>
                            <span className={styles.accordionTitle}>{cleanTitle}</span>
                            {showSoonBadge && <span className={styles.soonBadge}>Yakında</span>}
                          </div>
                        </div>

                        <div className={styles.accordionArrow}>
                          <svg viewBox="0 0 10 10">
                            <path d="M2 3.5L5 6.5l3-3" />
                          </svg>
                        </div>
                      </button>

                      <div className={styles.accordionBody}>
                        <div className={styles.accordionInner}>
                          <div className={styles.accordionContent}>
                            {'cards' in accordion ? (
                              <div className={styles.grid}>
                                {accordion.cards.map((card, cardIndex) => {
                                  const cardKey = `${accordionKey}-${cardIndex}`;
                                  const isCardOpen = Boolean(openCards[cardKey]);

                                  return (
                                    <div key={card.title} className={`${styles.card} ${isCardOpen ? styles.cardOpen : ''}`}>
                                      <div className={styles.cardIcon} style={{ color: meta.iconColor }}>
                                        {getCardIcon(cardIndex)}
                                      </div>

                                      <div className={styles.cardBody}>
                                        <div className={styles.cardTitle}>{card.title}</div>
                                        <div className={styles.cardDescWrap}>
                                          <div className={styles.cardDesc}>{card.description}</div>
                                          <div className={styles.cardFade}></div>
                                        </div>
                                        <button
                                          type="button"
                                          className={styles.cardToggle}
                                          onClick={() => toggleCard(cardKey)}
                                        >
                                          <span>{isCardOpen ? 'Daha az göster' : 'Devamını oku'}</span>
                                          <svg viewBox="0 0 14 14">
                                            <path d="M2.5 5l4.5 4.5L11.5 5" />
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            ) : (
                              accordion.items.map((mini, miniIndex) => {
                                const isMiniOpen = Boolean(openMiniAccordions[accordionKey]?.[miniIndex]);

                                return (
                                  <div
                                    key={mini.title}
                                    className={`${styles.miniAccordion} ${isMiniOpen ? styles.miniOpen : ''}`}
                                  >
                                    <button
                                      type="button"
                                      className={styles.miniButton}
                                      onClick={() => toggleMiniAccordion(section.id, accordionIndex, miniIndex)}
                                      aria-expanded={isMiniOpen ? "true" : "false"}
                                    >
                                      <div className={styles.miniButtonLeft}>{mini.title}</div>
                                      <div className={styles.miniArrow}>
                                        <svg viewBox="0 0 10 10">
                                          <path d="M2 3.5L5 6.5l3-3" />
                                        </svg>
                                      </div>
                                    </button>

                                    <div className={styles.miniBody}>
                                      <div className={styles.miniInner}>
                                        <div className={styles.miniContent}>
                                          <div className={styles.grid}>
                                            {mini.cards.map((card, cardIndex) => {
                                              const cardKey = `${accordionKey}-${miniIndex}-${cardIndex}`;
                                              const isCardOpen = Boolean(openCards[cardKey]);

                                              return (
                                                <div key={card.title} className={`${styles.card} ${isCardOpen ? styles.cardOpen : ''}`}>
                                                  <div className={styles.cardIcon} style={{ color: meta.iconColor }}>
                                                    {getCardIcon(cardIndex)}
                                                  </div>

                                                  <div className={styles.cardBody}>
                                                    <div className={styles.cardTitle}>{card.title}</div>
                                                    <div className={styles.cardDescWrap}>
                                                      <div className={styles.cardDesc}>{card.description}</div>
                                                      <div className={styles.cardFade}></div>
                                                    </div>
                                                    <button
                                                      type="button"
                                                      className={styles.cardToggle}
                                                      onClick={() => toggleCard(cardKey)}
                                                    >
                                                      <span>{isCardOpen ? 'Daha az göster' : 'Devamını oku'}</span>
                                                      <svg viewBox="0 0 14 14">
                                                        <path d="M2.5 5l4.5 4.5L11.5 5" />
                                                      </svg>
                                                    </button>
                                                  </div>
                                                </div>
                                              );
                                            })}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}

'use client';

import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

type HardwareCard = {
  title: string;
  subtitle: string;
  description: ReactNode;
  image: string;
  imageAlt: string;
  variant: 'cyan' | 'purple' | 'neb';
  features: { icon: ReactNode; text: string }[];
};

type DetailSection =
  | {
      kind: 'pax';
      id: string;
      title: string;
      description: string;
      icon: ReactNode;
      cards: {
        title: string;
        body: ReactNode;
        sub: string;
        icon: ReactNode;
      }[];
      linkCard: {
        label: string;
        title: string;
        href: string;
        buttonLabel: string;
      };
    }
  | {
      kind: 'columns';
      id: string;
      title: string;
      description: string;
      intro: string;
      icon: ReactNode;
      columns: {
        title: string;
        accent: 'purple' | 'cyan' | 'neb';
        items: { title: string; description: string }[];
      }[];
    };

const hardwareCards: HardwareCard[] = [
  {
    title: 'PAX Elys Serisi ve Nebim ERA',
    subtitle: 'YN OKC Muafiyetli Perakendeciler Icin Mukemmel Android Kasa Cozumu',
    image: '/img/pax-elys.png',
    imageAlt: 'PAX Elys POS Workstation',
    variant: 'cyan',
    description: (
      <>
        YN OKC muafiyeti kapsaminda olan perakendeciler icin, <strong>Red Dot Tasarim Odullu</strong>, <strong>PAX Elys</strong> donanim grubu ile <strong>Nebim ERA Perakende Satis</strong> yazilimini tam entegre calistirarak kasa islemlerini hizlandirin.
      </>
    ),
    features: [
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="3" width="20" height="14" rx="2" stroke="var(--cyan)" strokeWidth="1.5" />
            <path d="M8 21h8M12 17v4" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
        text: 'Butunlesik EFT-POS ile interaktif musteri terminali',
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="2" width="14" height="20" rx="2" stroke="var(--cyan)" strokeWidth="1.5" />
            <circle cx="12" cy="18" r="1" fill="var(--cyan)" />
            <path d="M9 5h6" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
        text: 'Android uzerinde native Nebim ERA POS',
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="var(--cyan)" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M9 12l2 2 4-4" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        text: 'Terminal Server maliyetlerine son',
      },
    ],
  },
  {
    title: "YN OKC'ler ve EFT-POS'lar",
    subtitle: 'Nebim ERA Perakende Satis ile Entegre',
    image: '/img/newland-nft10-front.png',
    imageAlt: 'YN OKC ve EFT-POS Entegre Cihazlar',
    variant: 'purple',
    description:
      "Kasalarinizdaki mevcut notebook, PC ya da cihazlarinizda; Google Chrome gibi web tarayicilari uzerinde veya Android uzerinde native calisan Nebim ERA Perakende Satis Uygulamasi'nin destekledigi, YN OKC veya EFT-POS cihazlarini kullanin.",
    features: [
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 7v10a2 2 0 002 2h12a2 2 0 002-2V7M4 7l8 6 8-6" stroke="var(--purple)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        text: 'GMP-3 protokolu uzerinden tam entegrasyon',
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="var(--purple)" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        ),
        text: 'Hugin, Ingenico, PAX modelleri',
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="5" width="20" height="14" rx="2" stroke="var(--purple)" strokeWidth="1.5" />
            <path d="M2 10h20" stroke="var(--purple)" strokeWidth="1.5" />
            <path d="M6 15h4" stroke="var(--purple)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
        text: 'Mevcut donanim yatirimini koruyun',
      },
    ],
  },
  {
    title: 'Magaza Arka Ofis Operasyonlari icin Mobil Cihazlar',
    subtitle: 'Newland & Zebra',
    image: '/img/zebra-tc21.jpg',
    imageAlt: 'Zebra TC21 Mobil Bilgisayar',
    variant: 'neb',
    description:
      'Uzerinde Nebim ERA Magaza Envanter Yonetimi (Store Inventory Management, SIM) calistirarak urun kabul, sayim, etiket dokumu gibi islemleri hizla gerceklestirebileceginiz Android cihazlari kullanin.',
    features: [
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 7H4a1 1 0 00-1 1v8a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1z" stroke="var(--neb)" strokeWidth="1.5" />
            <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="var(--neb)" strokeWidth="1.5" />
            <path d="M12 11v4M10 13h4" stroke="var(--neb)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
        text: 'Urun kabul, sayim, etiket dokumu',
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="2" width="14" height="20" rx="2" stroke="var(--neb)" strokeWidth="1.5" />
            <path d="M15 2v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V2" stroke="var(--neb)" strokeWidth="1.5" />
            <path d="M9 12l2 2 4-4" stroke="var(--neb)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        text: 'Reyonda gercek zamanli stok sorgulama',
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v6m0 0H3m6 0h12M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9" stroke="var(--neb)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        text: 'Android native SIM uygulamasi',
      },
    ],
  },
];

const detailSections: DetailSection[] = [
  {
    kind: 'pax',
    id: 'pax',
    title: 'PAX Elys Serisi · Butunlesik Donanim Bilesenleri',
    description: 'YN OKC muafiyetli perakendeciler icin mukemmel Android kasa cozumu bilesenleri',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    cards: [
      {
        title: 'PAX Elys Station L1400',
        body: (
          <>
            Elys Station&apos;in yuksek cozunurluklu genis dokunmatik ekrani ile <strong>kasadaki satis danismaninizin</strong> Nebim ERA uygulamasini en verimli sekilde kullanmasini saglayin. <strong>Android uzerinde native calisan</strong> Nebim ERA Perakende Satis uygulamasi sayesinde hem hizli kullanim kolayligi elde edin, hem de <strong>Terminal Server maliyetlerinden kurtulun</strong>.
          </>
        ),
        sub: 'Yuksek Performansli Ana Terminal',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: 'PAX Elys Tablet A3700',
        body: (
          <>
            Tabletin <strong>butunlesik EFT-POS cihazi</strong> ile kredi karti odemelerini alin. Musterinizin kredi kartini kullanarak odeme yaptigi tablette odeme almanin yani sira, ayrica musterinin <strong>sepetindeki urunleri ve uygulanan indirimleri</strong> de gosterin. Nebim ERA uygulamasinin bu tablet uzerinde native calisan ve kasadaki perakende satis uygulamasi ile anlik haberlesen uygulamasi sayesinde; musterinin odeme aninda ayni tablet uzerinden <strong>OTP sifre girmesini, KVKK/ETK onayini isaretlemesini, adres ve e-posta gibi bilgilerini guncellemesini</strong> de saglayin.
          </>
        ),
        sub: 'Butunlesik EFT-POS ve Interaktif Musteri Deneyimi Tableti',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        ),
      },
      {
        title: 'PAX Elys Printer T3180',
        body: 'Nebim ERA uzerinden ozellestirilebilen yapisi sayesinde; fis, fatura, iade ceki, degisim karti belgelerini yuksek cozunurlukle basin. 260mm/s baski hiziyla baski suresini minimize edin.',
        sub: 'Yuksek Hizli Termal Yazici',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <polyline points="6 9 6 2 18 2 18 9" stroke="currentColor" strokeWidth="1.6" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="1.6" />
            <rect x="6" y="14" width="12" height="8" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        ),
      },
      {
        title: 'PAX Elys Eye T3320 / T3300',
        body: 'Kablosuz ve ergonomik yapisiyla urun barkodlarini her acida hizla tarayin. Kasa uzerindeki hareket alanini kisitlamadan urun okutma hizini artirin.',
        sub: 'Barkod Okuyucu',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="6" width="2" height="12" stroke="currentColor" strokeWidth="1.6" />
            <rect x="6" y="6" width="1" height="12" stroke="currentColor" strokeWidth="1.6" />
            <rect x="9" y="6" width="2" height="12" stroke="currentColor" strokeWidth="1.6" />
            <rect x="13" y="6" width="1" height="12" stroke="currentColor" strokeWidth="1.6" />
            <rect x="15" y="6" width="3" height="12" stroke="currentColor" strokeWidth="1.6" />
            <rect x="20" y="6" width="2" height="12" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        ),
      },
      {
        title: 'PAX Elys Hub 3400',
        body: 'Tum donanim bilesenlerini tek bir merkezde toplayin; kablo karmasasini engelleyerek kasa alaninda operasyonel duzen ve kesintisiz veri iletisimi saglayin.',
        sub: 'Kompakt Baglanti Yonetimi',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
            <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
    linkCard: {
      label: 'Daha Fazla Bilgi',
      title: 'PAX Elys ile tanisin',
      href: 'https://paramtech.com.tr',
      buttonLabel: "ParamTech Satis'a Git →",
    },
  },
  {
    kind: 'columns',
    id: 'odeme-cihazlari',
    title: "Nebim ERA Perakende Satis ile Entegre · YN OKC'ler ve EFT-POS'lar",
    description: 'Kasalarinizdaki mevcut cihazlarinizda YN OKC veya EFT-POS ile tam entegrasyon',
    intro:
      "Kasalarinizdaki mevcut notebook, PC ya da cihazlarinizda; Google Chrome gibi web tarayicilari uzerinde veya Android uzerinde native calisan Nebim ERA Perakende Satis Uygulamasi'nin destekledigi, YN OKC veya EFT-POS cihazlarini kullanin.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M2 10h20" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 15h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    columns: [
      {
        title: 'GMP-3 Uzerinden Entegre YN OKC Modelleri',
        accent: 'purple',
        items: [
          { title: 'HUGIN Tiger T300', description: 'TSM uzerinden baglanti' },
          { title: 'HUGIN S1 Yeni Nesil Android Yazarkasa POS', description: 'Nebim ERA Device Bridge kurarak Wi-Fi ya da Ethernet kablosu uzerinden aga baglanti' },
          { title: 'Ingenico Move 5000F Yazarkasa POS', description: 'TSM uzerinden baglanti' },
          { title: 'Ingenico iDE 280 ve Ingenico iWE 280 Yazarkasa POS', description: 'TSM uzerinden baglanti' },
          { title: 'PAX Worldline A910SF Yeni Nesil Android Pos Yazarkasa', description: 'TSM uzerinden baglanti' },
        ],
      },
      {
        title: 'Entegre EFT-POS Modelleri',
        accent: 'cyan',
        items: [
          { title: 'PAX A80 EFT-POS', description: 'Nebim ERA Device Bridge kurarak Wi-Fi ya da Ethernet kablosu uzerinden aga baglanti' },
          { title: 'PAX Elys Tablet A3700', description: 'PAX Elys cozumu bunyesinde' },
        ],
      },
    ],
  },
  {
    kind: 'columns',
    id: 'mobil-cihazlar',
    title: 'Magaza Arka Ofis Operasyonlari icin Mobil Cihazlar',
    description: 'Uzerinde Nebim ERA Magaza Envanter Yonetimi (SIM) calistirabileceginiz Android cihazlar',
    intro:
      'Uzerinde Nebim ERA Magaza Envanter Yonetimi (Store Inventory Management, SIM) calistirarak urun kabul, sayim, etiket dokumu gibi islemleri hizla gerceklestirebileceginiz Android cihazlari kullanin.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M15 2v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    columns: [
      {
        title: 'Desteklenen Android Mobil Bilgisayarlar',
        accent: 'neb',
        items: [
          { title: 'Newland', description: 'Android mobil bilgisayar' },
          { title: 'Zebra', description: 'Android mobil bilgisayar' },
        ],
      },
    ],
  },
];

function getVariantClass(variant: HardwareCard['variant']) {
  if (variant === 'cyan') return styles.variantCyan;
  if (variant === 'purple') return styles.variantPurple;
  return styles.variantNeb;
}

function getDotClass(accent: 'purple' | 'cyan' | 'neb') {
  if (accent === 'purple') return styles.checkDotPurple;
  if (accent === 'cyan') return styles.checkDotCyan;
  return styles.checkDotNeb;
}

function getDetailIconStyle(accent: HardwareCard['variant']): CSSProperties {
  if (accent === 'cyan') return { color: 'var(--cyan)' };
  if (accent === 'purple') return { color: 'var(--purple)' };
  return { color: 'var(--neb)' };
}

export function CertifiedPageClient() {
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({
    pax: true,
    'odeme-cihazlari': false,
    'mobil-cihazlar': false,
  });

  const toggleCard = (id: string) => {
    setOpenCards((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <main className={styles.main}>
      <section className={`sec sec-panel ${styles.heroSection}`}>
        <div className="wrap">
          <ScrollReveal className={`text-c ${styles.heroIntro}`}>
            <h1 className="t-h1 mb4" style={{ fontFamily: 'var(--font-display)' }}>
              Nebim ERA&apos;nin <span className="grad-text">Yazilim Cevikligini,</span> Donanimin Gucuyle Bulusturun
            </h1>
            <p className={`t-body ${styles.heroBody}`}>
              Nebim ERA ile kasa noktalarindan reyon ortasina, <span className={styles.soonPill}>Yakinda</span> self-servis alanlarindan mobil odeme sureclerine kadar tum magaza operasyonunuzu Nebim-Certified donanim ekosistemi ile destekleyin
            </p>
          </ScrollReveal>

          <div className={`g3 ${styles.hardwareGrid}`}>
            {hardwareCards.map((card, index) => (
              <ScrollReveal key={card.title} delay={(index + 1) as 1 | 2 | 3}>
                <article className={`${styles.hardwareCard} ${getVariantClass(card.variant)}`}>
                  <div className={styles.hardwareGlow}></div>
                  <div className={styles.hardwareMedia}>
                    <Image src={card.image} alt={card.imageAlt} width={560} height={380} loading="lazy" />
                    <div className={styles.hardwareSub}>{card.subtitle}</div>
                  </div>

                  <div className={styles.hardwareBody}>
                    <div className="t-h3 mb2">{card.title}</div>
                    <div className={styles.hardwareDesc}>{card.description}</div>

                    {card.features.map((feature) => (
                      <div key={feature.text} className={styles.hardwareFeature}>
                        <div className={styles.hardwareFeatureIcon}>{feature.icon}</div>
                        <span className={styles.hardwareFeatureText}>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {detailSections.map((section) => (
            <ScrollReveal key={section.id} delay={1}>
              <section className={`${styles.detailsCard} ${openCards[section.id] ? styles.detailsOpen : ''}`}>
                <div className={styles.detailsGlow}></div>
                <button
                  type="button"
                  className={styles.detailsButton}
                  onClick={() => toggleCard(section.id)}
                  aria-expanded={openCards[section.id] ? "true" : "false"}
                  aria-controls={`${section.id}-content`}
                >
                  <div style={{ minWidth: 0 }}>
                    <div className={styles.detailsTitle}>{section.title}</div>
                    <div className={styles.detailsDesc}>{section.description}</div>
                  </div>

                  <div className="flex gap3">
                    <div className={styles.detailsIcon}>{section.icon}</div>
                    <div className={styles.detailsArrow} aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </button>

                <div id={`${section.id}-content`} className={styles.detailsBody}>
                  <div className={styles.detailsInner}>
                    <div className={styles.detailsContent}>
                      {section.kind === 'pax' ? (
                        <div className={`g3 ${styles.featureGrid}`}>
                          {section.cards.map((card) => (
                            <div key={card.title} className={styles.featureCard}>
                              <div className={styles.featureIcon}>{card.icon}</div>
                              <div className="t-h4 mb2">{card.title}</div>
                              <div className="t-xs t2" style={{ lineHeight: 1.7 }}>
                                {card.body}
                              </div>
                              <div className={styles.featureCardSub}>{card.sub}</div>
                            </div>
                          ))}

                          <div className={styles.featureLinkCard}>
                            <div className="t-lbl mb2" style={{ color: 'var(--cyan)' }}>{section.linkCard.label}</div>
                            <div className={`t-h4 mb3 ${styles.featureLinkTitle}`}>{section.linkCard.title}</div>
                            <a
                              href={section.linkCard.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-grad btn-sm"
                            >
                              {section.linkCard.buttonLabel}
                            </a>
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className={`t-body mb4 ${styles.detailsIntro}`}>{section.intro}</p>
                          <div className={`split ${styles.columns}`} style={{ gridTemplateColumns: `repeat(${section.columns.length}, minmax(0, 1fr))` }}>
                            {section.columns.map((column) => (
                              <div key={column.title} className={styles.stage}>
                                <div className="t-lbl mb4" style={getDetailIconStyle(column.accent)}>
                                  {column.title}
                                </div>
                                <div className={styles.checkList}>
                                  {column.items.map((item) => (
                                    <div key={item.title} className={styles.checkItem}>
                                      <div className={`${styles.checkDot} ${getDotClass(column.accent)}`}>●</div>
                                      <div>
                                        <strong className="t-h4" style={{ display: 'block', marginBottom: 2 }}>{item.title}</strong>
                                        <span className="t-xs t2">{item.description}</span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className={`sec ${styles.ctaSection}`}>
        <div className="wrap">
          <ScrollReveal>
            <div className={styles.ctaCard}>
              <div className="t-h2 text-c">Iletisime gecmek icin tiklayin</div>
              <a
                href="https://www.nebim.com.tr/iletisim"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-grad btn-lg"
              >
                Iletisime Gecin →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

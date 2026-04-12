'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';

const videos = [
  '/vids/bp-luminous.mp4',
  '/vids/particles-bg.mp4',
  '/vids/bp-purple-light.mp4',
  '/vids/bp-sparkling.mp4',
  '/vids/bp-bokeh.mp4',
  '/vids/bp-network.mp4',
  '/vids/bp-nodes.mp4',
  '/vids/bp-globe.mp4',
  '/vids/bp-beams.mp4',
  '/vids/bp-sphere.mp4',
] as const;

const developerSlides = [
  {
    title: 'Kesintisiz Versiyonlama ve Geriye Dönük Uyumluluk',
    description:
      "Nebim ERA PaaS'ın gelişmiş API versiyonlama desteği sayesinde mevcut uygulamanızın sürekliliğini tehlikeye atmadan yeni özellikleri devreye alın.",
    link: '/paas-sss#nebim-guvencesi',
    info: 'SSS: Nebim Güvencesi',
  },
  {
    title: 'Rol Bazlı Erişim ve Güvenlik',
    description:
      'RBAC yapısıyla ekiplerinize tam ihtiyaç duydukları kadar yetki verin. Geliştirme, test ve canlı ortam akışlarını daha güvenli yönetin.',
    link: '/paas-sss#rbac-nedir',
    info: 'SSS: RBAC',
  },
  {
    title: 'Event-Driven DataSync',
    description:
      'Webhook ve event tabanlı veri akışıyla sipariş, müşteri ve stok verilerini dış sistemlerle anlık paylaşın; retry mekanizmalarıyla akışı dayanıklı hale getirin.',
    link: '/paas-sss#datasync-nedir',
    info: 'SSS: DataSync',
  },
] as const;

const datasyncFeatures = [
  {
    title: 'Esnek Event Kaynakları',
    description:
      'Siparişten müşteriye, stoktan alışverişlere kadar her veri setini bağımsız yapılandırın.',
  },
  {
    title: 'Filtrelenebilir Veri Akışı',
    description:
      'Abonelik bazında tanımlanabilen filtrelerle yalnızca ihtiyaç duyulan veriyi paylaşın.',
  },
  {
    title: 'Gelişmiş Retry ve Hata Toleransı',
    description:
      'Tanımlanabilir retry sayısı, interval ve timeout ile entegrasyonlarınızı veri kaybına karşı koruyun.',
  },
  {
    title: 'Farklı Format Desteği',
    description:
      'JSON, XML veya form-encoded formatlar arasında geçiş yaparak entegrasyon engellerini azaltın.',
  },
] as const;

const ecosystemCards = [
  {
    eyebrow: 'Nebim Teknoloji İş Ortakları',
    title: 'Kendi Gökdeleninizi İnşa Edin',
    description:
      'Nebim teknolojik kaslarını kullanarak aynı yetki ve güçle çözümler üretin. Özgün çözümlerinizi Nebim Certified güvencesiyle geniş perakende ağına ulaştırın.',
    bullets: [
      'Nebim SaaS uygulamalarıyla aynı servis setine erişin',
      'Nebim Certified sertifikasyonuyla güven inşa edin',
      'Geniş perakende ağına doğrudan erişin',
    ],
    ctaLabel: 'İş Ortağı Başvurusu',
    ctaHref: '#cta',
  },
  {
    eyebrow: 'Perakende Firmaları',
    title: 'Hazır Ekosisteme Anında Erişin',
    description:
      'Her ihtiyaca yanıt veren, Nebim tarafından onaylanmış çözüm çeşitliliğine Nebim Uygulama Mağazası üzerinden tek tıkla ulaşın.',
    bullets: [
      'Onaylanmış çözümler ve güvenli entegrasyon',
      'Tek tıkla kurulum ve hızlı devreye alma',
      'İhtiyaca göre genişleyen çözüm ekosistemi',
    ],
    ctaLabel: 'Uygulama Mağazası Çok Yakında',
    ctaHref: '#cta',
  },
] as const;

function createCoupon() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let value = 'ERA-';

  for (let index = 0; index < 6; index += 1) {
    value += chars[Math.floor(Math.random() * chars.length)];
  }

  return value;
}

export function PaasPageClient() {
  const [videoIndex, setVideoIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isEasterOpen, setIsEasterOpen] = useState(false);
  const [coupon] = useState(() => createCoupon());
  const [isCopied, setIsCopied] = useState(false);

  const utmLink = `nebim.com.tr/era?utm_source=paas&utm_coupon=${coupon}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(`https://${utmLink}`)}`;

  const handleCopy = async () => {
    const text = `Kupon: ${coupon}\nLink: https://${utmLink}`;

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero} id="hero">
        <div className={styles.videoWrap}>
          <video key={videos[videoIndex]} src={videos[videoIndex]} autoPlay muted loop playsInline />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.particles}>
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={index}></span>
          ))}
        </div>

        <div className={`wrap ${styles.heroInner}`}>
          <div className={styles.heroHeader}>
            <h1 className={styles.heroTitle}>
              Türkiye&apos;nin İlk Yerel <span className="grad-text">Bütünleşik Perakende PaaS</span>{' '}
              Çözümüyle Tanışın: Hayal Ettiğiniz Her Şeyi İnşa Edin
            </h1>
            <p className="t-body">
              Nebim ERA sadece hazır uygulamalar bütünü değil; perakende dünyasının kurallarını yeniden
              yazmanızı sağlayan, yapay zeka ve agentic computing destekli bir Platform as a Service
              çözümüdür.
            </p>
          </div>

          <div className={styles.freedomBanner}>
            <span className={styles.heroLabel}>Perakendeciler için sınır tanımayan geliştirme özgürlüğü</span>
            <h2>Kendi yazılım geliştiricileriniz için uçsuz bucaksız bir oyun alanı.</h2>
            <p>
              Türkiye&apos;deki kapalı veya yarı-açık perakende SaaS uygulamalarının aksine Nebim ERA
              PaaS, size sadece bir ev kiralama şansı vermiyor; evin temelini ve tesisatını kullanarak
              kendi gökdeleninizi inşa etme gücü veriyor.
            </p>

            <div className={styles.heroActions}>
              <button
                type="button"
                className="btn btn-grad btn-lg"
                onClick={() => setVideoIndex((current) => (current + 1) % videos.length)}
              >
                Arka Planı Değiştir
              </button>
              <Link href="#features" className="btn btn-outline btn-lg">
                Platform Güçlerini Gör
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-panel" id="features">
        <div className="wrap">
          <div className={styles.centerHead}>
            <div className="t-lbl cyan-text mb3">Platform Güçleri</div>
            <h2 className="t-h1">Nebim ERA PaaS&apos;ın Öne Çıkan Özellikleri</h2>
          </div>

          <div className={styles.topGrid}>
            <article className={styles.stageCard}>
              <span className={styles.cardEyebrow}>Nebim ERA Mikroservis Mimarisi</span>
              <h3>Bütünleşik Perakende Çözümleri</h3>
              <p>
                Nebim ERA Platformu&apos;nun derin perakende uzmanlığını Nebim ERA PaaS çatısı altında
                hizmet olarak deneyimleyin. Kendi SaaS uygulamalarımızı geliştirdiğimiz servis setinin
                aynısını kullanarak özel çözümler üretin.
              </p>

              <div className={styles.timeline}>
                <div>
                  <strong>Servis Seç</strong>
                  <span>Perakende kaslarını seçin</span>
                </div>
                <div>
                  <strong>Entegre Et</strong>
                  <span>API&apos;ye bağlanın</span>
                </div>
                <div>
                  <strong>Yayına Al</strong>
                  <span>Test edin ve devreye alın</span>
                </div>
              </div>
            </article>

            <article className={styles.patternCard}>
              <span className={styles.cardEyebrowAlt}>Nebim ERA Hazır Veri Modelleri</span>
              <h3>Bütünleşik Perakendeye Özgü Platform Servisleri</h3>
              <p>
                Nebim ERA PaaS&apos;ın ödeme akışları ve stok servisleriyle kendinize özel perakende
                yazılım geliştirme süresini aylardan günlere indirin.
              </p>
              <p>
                Tekerleği yeniden icat etmeyin; kendi özel iş ihtiyaçlarınız için terzi dikimi
                perakende çözümleri üretmeye odaklanın.
              </p>
            </article>
          </div>

          <div className={styles.featureTriplet}>
            <article className={styles.featureCard}>
              <span className={styles.featureIndex}>MACH</span>
              <h4>MACH Mimari Felsefe</h4>
              <p>
                Modern yazılım geliştirmenin ileri paradigması olan MACH mimarisini esas alın.
                Bileşenler arasındaki bağımsız yapı sayesinde sadece ihtiyacınız olan servisleri
                seçer, ölçeklendirir ve güncellersiniz.
              </p>
            </article>

            <article className={styles.featureCard}>
              <span className={styles.featureIndex}>AWS</span>
              <h4>Ölçeklenebilir Cloud-Native Altyapı</h4>
              <p>
                Kampanya dönemlerindeki trafik patlamalarında sisteminiz kendiliğinden ölçeklensin;
                tek bir satış fırsatını bile kaybetmeyin.
              </p>
            </article>

            <article className={styles.featureCard}>
              <span className={styles.featureIndex}>API</span>
              <h4>API-First Geliştirme Deneyimi</h4>
              <p>
                OpenAPI ve AsyncAPI standartlarıyla tanımlı endpoint&apos;leri canlı test edin; C#,
                Java ve Python dostu geliştirme akışıyla hız kazanın.
              </p>
            </article>
          </div>

          <div className={styles.sliderSection}>
            <div className={styles.sliderHead}>
              <div>
                <span className={styles.cardEyebrow}>Geliştirici Deneyimi</span>
                <h3>Perakendeciler için sınır tanımayan geliştirme özgürlüğü</h3>
              </div>

              <div className={styles.sliderControls}>
                <button
                  type="button"
                  className={styles.sliderButton}
                  onClick={() =>
                    setActiveSlide((current) => (current - 1 + developerSlides.length) % developerSlides.length)
                  }
                >
                  Geri
                </button>
                <button
                  type="button"
                  className={styles.sliderButton}
                  onClick={() => setActiveSlide((current) => (current + 1) % developerSlides.length)}
                >
                  İleri
                </button>
              </div>
            </div>

            <div className={styles.sliderTrack}>
              {developerSlides.map((slide, index) => {
                const isActive = index === activeSlide;

                return (
                  <article
                    key={slide.title}
                    className={`${styles.slideCard} ${isActive ? styles.slideActive : ''}`}
                  >
                    <div className={styles.slideInfo}>
                      <span>0{index + 1}</span>
                      <Link href={slide.link}>{slide.info}</Link>
                    </div>
                    <h4>{slide.title}</h4>
                    <p>{slide.description}</p>
                  </article>
                );
              })}
            </div>

            <article className={`${styles.featureCard} ${styles.aiCard}`}>
              <span className={styles.featureIndex}>AI</span>
              <h4>Yerleşik Yapay Zeka ile Akıllı Dönüşüm</h4>
              <p>
                Embedded AI ve agentic kurgularla sadece entegrasyon yapan değil, karar veren,
                öneren ve aksiyon alan perakende uygulamaları inşa edin.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="sec sec-dark" id="datasync">
        <div className="wrap">
          <span className={styles.cardEyebrowAlt}>ERA DataSync</span>
          <h2 className="t-h1 mb4">Kusursuz Veri Entegrasyonu</h2>
          <p className="t-body" style={{ maxWidth: 720 }}>
            Nebim ERA&apos;da kayıt altına alınan veriyi anlık olarak dış sistemlerinize aktarın veya
            harici veri kaynaklarını Nebim ERA&apos;ya bağlayın. Webhook ve WebSocket destekli veri
            akışıyla verilerinizi çözüm ekosisteminizin merkezine yerleştirin.
          </p>

          <div className={styles.datasyncGrid}>
            {datasyncFeatures.map((item) => (
              <article key={item.title} className={styles.dataCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`sec ${styles.ecosystemSection}`} id="ecosystem">
        <div className="wrap">
          <div className={styles.centerHead}>
            <div className="t-lbl cyan-text mb3">Perakendenin Yeni Güç Merkezi</div>
            <h2 className="t-h1">
              Nebim ERA PaaS &<br />
              Nebim Uygulama Mağazası Ekosistemi
            </h2>
            <p className="t-body mt4" style={{ maxWidth: 560, marginInline: 'auto' }}>
              Nebim ERA PaaS, Türkiye&apos;nin en büyük perakende ekosistemini bir araya getiren bir
              inovasyon köprüsüdür.
            </p>
          </div>

          <div className={styles.ecosystemGrid}>
            {ecosystemCards.map((card) => (
              <article key={card.title} className={styles.ecosystemCard}>
                <span className={styles.ecosystemEyebrow}>{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className={styles.ecosystemList}>
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className={styles.ecosystemItem}>
                      <span></span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <Link href={card.ctaHref} className="btn btn-grad btn-lg">
                  {card.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-panel" id="cta">
        <div className={`wrap ${styles.ctaWrap}`}>
          <div className={styles.ctaCopy}>
            <h2 className={styles.ctaTitle}>
              Çözümleri Sadece
              <br />
              Kullanmakla <span className="grad-text">Yetinmeyin</span>
            </h2>
            <p className="t-body">
              Nebim ERA PaaS ile perakendenin agentic geleceğini inşa eden ekosistemin bir parçası
              olun. İletişime geçmek için tıklayın.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <a
              href="https://www.nebim.com.tr/tr/iletisim-formu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-grad btn-lg"
            >
              İletişime Geçin
            </a>
            <button type="button" className="btn btn-outline btn-lg" onClick={() => setIsEasterOpen(true)}>
              Gizli Kuponu Aç
            </button>
          </div>
        </div>
      </section>

      {isEasterOpen && (
        <div className={styles.overlay} onClick={() => setIsEasterOpen(false)}>
          <div className={styles.easterCard} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setIsEasterOpen(false)}
              aria-label="Kapat"
            >
              ×
            </button>

            <div className={styles.easterEyebrow}>Gizli Kod Bulundu</div>
            <h3 className={styles.easterTitle}>Özel Kupon Kodunuz Hazır</h3>
            <p className={styles.easterText}>
              Bu kodu demo talebinizde paylaştığınızda ekibimiz size özel ilgilenecek.
            </p>

            <div className={styles.couponBox}>
              <div>
                <div className={styles.couponLabel}>Kupon Kodu</div>
                <div className={styles.couponCode}>{coupon}</div>
              </div>
              <button type="button" className={styles.copyButton} onClick={handleCopy}>
                {isCopied ? 'Kopyalandı' : 'Kopyala'}
              </button>
            </div>

            <div className={styles.shareGrid}>
              <div className={styles.sharePanel}>
                <div className={styles.shareLabel}>Referans Linkiniz</div>
                <div className={styles.shareValue}>{utmLink}</div>
              </div>

              <div className={styles.qrPanel}>
                <div className={styles.shareLabel}>Telefonda Aç</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={qrUrl} alt="QR kodu" className={styles.qrImage} />
              </div>
            </div>

            <div className={styles.successText}>
              {isCopied ? 'Kod ve link panoya kopyalandı.' : 'Kodu kopyalayıp demo talebinizde paylaşın.'}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

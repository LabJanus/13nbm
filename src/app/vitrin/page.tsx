import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Nebim ERA Proje Vitrini',
  description:
    'Nebim ERA sitesinin bilgi mimarisi, içerik akışı, tasarım dili ve frontend mimarisi için çalışma vitrini.',
};

const routeCards = [
  {
    href: '/',
    kicker: 'Genel Bakış',
    title: 'Bütünleşik Perakende vaadi',
    body: 'Ana sayfa, “çok kanallı dönem bitti” iddiasıyla başlıyor ve tek ürün, tek müşteri, tek indirim, tek envanter, tek sepet, tek sipariş omurgasını kuruyor.',
    points: ['Hibrit perakende yönetimi', 'Nebim V3 ERP entegrasyonu', 'Demo talebi ve yasal onay akışı'],
  },
  {
    href: '/features',
    kicker: 'Keşif',
    title: '160+ özellik kataloğu',
    body: 'Ürün yetenekleri dokuz kategori altında düzenleniyor; kullanıcı burada çözümün operasyonel derinliğini kanıt olarak görüyor.',
    points: ['Müşteri, ürün, stok', 'Sipariş, satış noktaları, kampanya', 'Ödeme, analitik, destek'],
  },
  {
    href: '/paas',
    kicker: 'Platform',
    title: 'PaaS ve ekosistem anlatısı',
    body: 'PaaS sayfası, Nebim ERA’yı hazır uygulama setinden çıkarıp mikroservis, API-first, cloud-native, headless ve AI destekli geliştirme platformu olarak konumluyor.',
    points: ['MACH mimarisi', 'DataSync ve event akışları', 'Uygulama mağazası ekosistemi'],
  },
  {
    href: '/paas-sss',
    kicker: 'Güven',
    title: 'Teknik itirazları cevaplama',
    body: 'SSS sayfası PaaS kararında doğacak güvence, RBAC, DataSync, SaaS-PaaS farkı ve fiyatlandırma sorularını toparlıyor.',
    points: ['Nebim Güvencesi', 'RBAC ve güvenlik', 'Cevap bulunamayan soru için CTA'],
  },
  {
    href: '/certified',
    kicker: 'Mağaza',
    title: 'Donanım ekosistemi',
    body: 'Certified sayfası yazılım çevikliğini kasa, EFT-POS, YN ÖKC ve mağaza mobil cihazlarıyla tamamlıyor.',
    points: ['PAX Elys', 'EFT-POS ve YN ÖKC', 'SIM cihazları'],
  },
  {
    href: '/paket-1',
    kicker: 'Paketler',
    title: 'Segment karar merdiveni',
    body: 'Paket 1, Paket 2, Paket 3 ve Custom sayfaları satın alma kararını işletme olgunluğu ve ihtiyaç ölçeğine göre ayrıştırıyor.',
    points: ['İlk adım', 'Büyüyen işletme', 'Kurumsal ve özel çözüm'],
  },
];

const journeySteps = [
  {
    label: '01',
    title: 'Farkındalık',
    body: 'Ana sayfa Nebim ERA’yı perakendenin bütünleşik ticaret katmanı olarak çerçeveliyor.',
  },
  {
    label: '02',
    title: 'Yetenek keşfi',
    body: 'Özellikler sayfası operasyon ekiplerinin aradığı somut kabiliyet listesini veriyor.',
  },
  {
    label: '03',
    title: 'Teknik güven',
    body: 'PaaS ve SSS, geliştirici ekiplerin mimari, entegrasyon ve güvence sorularını cevaplıyor.',
  },
  {
    label: '04',
    title: 'Mağaza gerçekliği',
    body: 'Certified akışı yazılımın fiziksel mağaza cihazlarıyla nasıl çalıştığını gösteriyor.',
  },
  {
    label: '05',
    title: 'Paket kararı',
    body: 'Paket sayfaları çözümü başlangıç, büyüme, kurumsal ve özel ihtiyaçlara bağlıyor.',
  },
  {
    label: '06',
    title: 'Güven ve dönüşüm',
    body: 'Demo talebi, gizlilik, KVKK ve çerez sayfaları karar anındaki hukuki güven zeminini tamamlıyor.',
  },
];

const featureGroups = [
  'Müşteri',
  'Ürün & Katalog',
  'Stok',
  'Sipariş & Teslimat',
  'Satış Noktaları',
  'Kampanya',
  'Ödeme',
  'Analitik',
  'Destek',
];

const designNotes = [
  {
    title: 'Tema',
    body: 'Koyu yüzey, Nebim Blue ve ERA Cyan üstüne kuruluyor. Mavi güveni, cyan ise bulut, MACH, AI ve platform çevikliğini taşıyor.',
  },
  {
    title: 'Kompozisyon',
    body: 'Eski içeriklerde müşteri metinleri korunuyor; vitrin ise bu içeriğin üstüne açıklayıcı bir UX okuma katmanı ekliyor.',
  },
  {
    title: 'Ritim',
    body: 'Sticky navigasyon, bölüm pill’leri, kartlar ve uzun anlatılarda açılır okuma parçaları satın alma kararını bölümlere ayırıyor.',
  },
  {
    title: 'Tipografi',
    body: 'Ana sistem Inter gövde, JetBrains Mono teknik etiket ve token seviyesinde Instrument Serif display seçeneğiyle tanımlı.',
  },
];

const architectureItems = [
  {
    name: 'İçerik kaynakları',
    value: 'src/content/legacy-pages/*.html',
    body: 'V3 klasöründen alınan müşteri içerikleri burada korunuyor.',
  },
  {
    name: 'Route adaptörü',
    value: 'src/lib/legacySite.ts',
    body: 'HTML metadata, body markup ve eski asset/link yolları burada normalize ediliyor.',
  },
  {
    name: 'Statik sayfalar',
    value: 'src/app/page.tsx + src/app/[slug]/page.tsx',
    body: 'Ana sayfa ve eski sayfalar statik export için build sırasında üretiliyor.',
  },
  {
    name: 'Vitrin katmanı',
    value: 'src/app/vitrin/page.tsx',
    body: 'Bu sayfa ekip içi IA, UX/UI ve frontend okuma materyali olarak bağımsız kalıyor.',
  },
];

const proofImages = [
  {
    src: '/img/pax-elys.png',
    alt: 'PAX Elys donanımı',
    label: 'Kasa deneyimi',
  },
  {
    src: '/img/newland-nft10-front.png',
    alt: 'Newland mağaza mobil cihazı',
    label: 'Reyon operasyonu',
  },
  {
    src: '/img/zebra-tc21.jpg',
    alt: 'Zebra TC21 mağaza cihazı',
    label: 'Envanter akışı',
  },
];

export default function VitrinPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Vitrin gezinme">
        <Link className={styles.brand} href="/">
          <Image
            src="/img/era_logo_final.svg"
            alt="Nebim ERA"
            width={124}
            height={32}
            priority
            unoptimized
            style={{ height: 'auto' }}
          />
        </Link>
        <div className={styles.navLinks}>
          <a href="#mimari">Bilgi Mimarisi</a>
          <a href="#akis">Akış</a>
          <a href="#tasarim">Tasarım</a>
          <a href="#frontend">Frontend</a>
        </div>
      </nav>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>UX/UI + Frontend çalışma vitrini</span>
            <h1 id="hero-title">Nebim ERA bilgi mimarisi ve yeni tema okuması</h1>
            <p>
              Bu sayfa, mevcut Nebim ERA sitesini içerik stratejisi, kullanıcı yolculuğu,
              tasarım dili ve frontend mimarisi açısından birlikte okumak için hazırlandı.
              Müşteri metinleri ve sayfa kompozisyonu ana rotalarda korunur; burası ise
              kararları görünür yapan eğitim materyali katmanıdır.
            </p>
            <div className={styles.heroActions} aria-label="Ana bağlantılar">
              <Link href="/" className={styles.primaryAction}>
                Canlı ana sayfa
              </Link>
              <Link href="/features" className={styles.secondaryAction}>
                Özellik kataloğu
              </Link>
            </div>
          </div>

          <aside className={styles.heroPanel} aria-label="Proje özeti">
            <div className={styles.panelMetric}>
              <span>12</span>
              <p>korunan legacy içerik sayfası</p>
            </div>
            <div className={styles.panelMetric}>
              <span>9</span>
              <p>özellik kategori grubu</p>
            </div>
            <div className={styles.panelMetric}>
              <span>1</span>
              <p>statik Next proje kabuğu</p>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.section} id="mimari" aria-labelledby="mimari-title">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Bilgi mimarisi</span>
          <h2 id="mimari-title">Bu proje hangi içerik omurgasına sahip?</h2>
          <p>
            Site, Nebim ERA’yı önce iş değeriyle anlatıyor, sonra operasyonel yetenek,
            teknik platform, mağaza donanımı, paket kararı ve hukuki güven katmanına doğru
            ilerletiyor.
          </p>
        </div>

        <div className={styles.routeGrid}>
          {routeCards.map((card) => (
            <Link href={card.href} className={styles.routeCard} key={card.title}>
              <span>{card.kicker}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.band} id="akis" aria-labelledby="akis-title">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Kullanıcı akışı</span>
          <h2 id="akis-title">Karar yolculuğu nasıl kuruluyor?</h2>
          <p>
            Akış, pazarlama sayfası gibi parlamakla yetinmiyor; satış, operasyon, BT ve
            mağaza ekiplerinin farklı güven ihtiyaçlarını sırasıyla karşılıyor.
          </p>
        </div>

        <div className={styles.journey}>
          {journeySteps.map((step) => (
            <article className={styles.journeyStep} key={step.label}>
              <span>{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="features-title">
        <div className={styles.splitHeader}>
          <div>
            <span className={styles.eyebrow}>Özellik taksonomisi</span>
            <h2 id="features-title">Ürün yetenekleri dokuz başlıkta kümeleniyor</h2>
          </div>
          <p>
            “160’tan fazla özellik” iddiası, geniş bir liste olmak yerine kullanıcının
            zihninde operasyonel alanlara bölünerek okunuyor.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {featureGroups.map((group, index) => (
            <div className={styles.featurePill} key={group}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {group}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.proofSection} aria-labelledby="proof-title">
        <div className={styles.proofCopy}>
          <span className={styles.eyebrow}>Certified katmanı</span>
          <h2 id="proof-title">Yazılım anlatısı mağaza donanımıyla zemine iniyor</h2>
          <p>
            Nebim Certified sayfası, bulut ve PaaS anlatısını mağazadaki kasa, reyon ve
            envanter operasyonuna bağlayarak fiziksel temas noktasını görünür kılıyor.
          </p>
          <Link href="/certified" className={styles.secondaryAction}>
            Certified sayfası
          </Link>
        </div>
        <div className={styles.deviceGrid}>
          {proofImages.map((image) => (
            <figure className={styles.deviceCard} key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={220}
                height={220}
                unoptimized
              />
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.band} id="tasarim" aria-labelledby="tasarim-title">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>UX/UI tasarım notları</span>
          <h2 id="tasarim-title">Yeni tema hangi kararları taşıyor?</h2>
          <p>
            Tema dili, kurumsal güveni teknik yenilikle yan yana tutuyor. Görsel ritim uzun
            B2B anlatısını kısa karar parçalarına bölmek için kullanılıyor.
          </p>
        </div>

        <div className={styles.noteGrid}>
          {designNotes.map((note) => (
            <article className={styles.noteCard} key={note.title}>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="frontend" aria-labelledby="frontend-title">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Frontend mimarisi</span>
          <h2 id="frontend-title">Sistem şu anda nasıl çalışıyor?</h2>
          <p>
            V3 klasörü artık runtime bağımlılığı değil. Korunan HTML kaynakları Next
            projesinin içinde duruyor; build çıktısı statik olarak üretilebiliyor.
          </p>
        </div>

        <div className={styles.architectureList}>
          {architectureItems.map((item) => (
            <article className={styles.architectureItem} key={item.name}>
              <span>{item.name}</span>
              <code>{item.value}</code>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-title">
        <span className={styles.eyebrow}>Net okuma</span>
        <h2 id="cta-title">Nebim ERA bir kampanya sayfasından çok, çok katmanlı karar sistemi.</h2>
        <p>
          İçerik stratejisi iş değeriyle başlıyor, ürün kanıtıyla güçleniyor, PaaS ve
          Certified katmanlarıyla teknik güven kazanıyor, paket ve yasal sayfalarla dönüşüme
          hazırlanıyor.
        </p>
        <div className={styles.heroActions}>
          <Link href="/paas" className={styles.primaryAction}>
            PaaS akışını incele
          </Link>
          <Link href="/paket-1" className={styles.secondaryAction}>
            Paket kararını gör
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="ft-grid">
          <div className="ft-brand">
            <div className="ft-brand-lockup">
              <Image
                src="/img/era_logo_final.svg"
                alt="Nebim ERA"
                className="ft-era-logo"
                width={160}
                height={29}
                unoptimized
              />
            </div>
            <p className="t-xs t2 ft-brand-copy">
              Türkiye&apos;nin ilk yerel bütünleşik perakende platformu. Fiziksel mağaza,
              e-ticaret ve pazaryeri tek platformda.
            </p>
            <div className="ft-brand-meta">
              <div className="ft-partners">
                <Image
                  src="/img/nebim_logo.svg"
                  alt="Nebim"
                  className="ft-param"
                  width={92}
                  height={18}
                  unoptimized
                />
                <span className="ft-partner-divider" />
                <span className="ft-partner-note">a</span>
                <a
                  href="https://param.com.tr"
                  target="_blank"
                  rel="noopener"
                  aria-label="Param Grubu"
                  className="ft-partner-link"
                >
                  <Image
                    src="/img/param-logo.svg"
                    alt="Param Grubu"
                    className="ft-param"
                    width={113}
                    height={18}
                    unoptimized
                  />
                </a>
                <span className="ft-partner-note">company</span>
              </div>
            </div>
          </div>

          <div>
            <div className="ft-col-title">NEBİM ERA</div>
            <div className="ft-links">
              <Link href="/" className="t-xs t2 ft-link">
                Genel Bakış
              </Link>
              <Link href="/features" className="t-xs t2 ft-link">
                Tüm Özellikler
              </Link>
              <Link href="/paas" className="t-xs t2 ft-link">
                Platform (PaaS)
              </Link>
              <Link href="/certified" className="t-xs t2 ft-link">
                Certified
              </Link>
            </div>
          </div>

          <div>
            <div className="ft-col-title">PAKETLER</div>
            <div className="ft-links">
              <Link href="/paket-1" className="t-xs t2 ft-link">
                Paket 1
              </Link>
              <Link href="/paket-2" className="t-xs t2 ft-link">
                Paket 2
              </Link>
              <Link href="/paket-3" className="t-xs t2 ft-link">
                Paket 3
              </Link>
              <Link href="/paket-custom" className="t-xs t2 ft-link">
                Custom
              </Link>
            </div>
          </div>

          <div>
            <div className="ft-col-title">NEBİM</div>
            <div className="ft-links">
              <a href="#" className="t-xs t2 ft-link">
                Nebim Hakkında
              </a>
              <a href="#" className="t-xs t2 ft-link">
                İş Ortakları
              </a>
              <a href="#" className="t-xs t2 ft-link">
                Kariyer
              </a>
              <a href="#" className="t-xs t2 ft-link">
                İletişim
              </a>
            </div>
          </div>
        </div>

        <div className="ft-divider"></div>
        <div className="ft-bottom">
          <span className="t-xs t3">
            © 2026 Nebim Neyir Bilgisayar Sanayii ve Hizmetleri A.Ş. Tüm hakları saklıdır.
          </span>
          <div className="flex gap4">
            <Link href="/gizlilik-politikasi" className="t-xs t3 ft-link">
              Gizlilik Politikası
            </Link>
            <Link href="/kvkk-aydinlatma" className="t-xs t3 ft-link">
              KVKK Aydınlatma
            </Link>
            <Link href="/cerez-politikasi" className="t-xs t3 ft-link">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

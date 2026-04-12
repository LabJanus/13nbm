'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

const typewriterText =
  'Nebim ERA ile "3 al 2 öde" gibi kurguları veya kişiye özel tanımlanmış sadakat indirimlerini, müşteriniz hangi kanalda olursa olsun aynı akıllı algoritma ile hatasız ve eş zamanlı sunun. Geleneksel çok kanallı yapıların en büyük sorunu olan; müşteriye mağazada bir fırsatı sunup, online mağazada teknik imkansızlıklar nedeniyle aynı fırsatı sunamama devrini tamamen sona erdirin. Müşteriniz sepetini nerede doldurursa doldursun, hak ettiği indirimlerin tutarlı bir şekilde uygulandığını görerek markanıza olan güveni pekişsin. Siz de kanallar arası kampanya karmaşasını ve manuel müdahale ihtiyacını ortadan kaldırarak operasyonel verimliliğinizi en üst seviyeye taşıyın.';

const erpTabs = [
  {
    title: 'Sıfır Veri Kaybı, Maksimum Doğruluk',
    description:
      "Satışlar, stok hareketleri ve müşteri verileri kanallar arasında kopyalanmaz; anlık olarak (gerçek zamanlı) senkronize edilir. Online ve fiziksel mağazalarınızdaki satış ve iadeleri anlık olarak Nebim V3 ERP'nize aktarın; mağazanızda satılan son ürün aynı anda ERP stoklarınızdan düşsün.",
  },
  {
    title: 'Kesintisiz Operasyonel Süreklilik',
    description:
      "Arka ofiste, mevzuata tam uyumlu güçlü finansal altyapısıyla Nebim V3'ü kullanmaya devam ederken; perakende mağazalarınızda Nebim ERA'nın bulutta çalışan, Terminal Server gerektirmeyen hızlı ve esnek satış deneyimini yaşayın.",
  },
  {
    title: 'Düşük Toplam Sahip Olma Maliyeti (TCO)',
    description:
      'Dışarıdan bir e-ticaret veya alternatif perakende satış çözümü alıp Nebim V3 ERP\'nize bağlamak için harcayacağınız aylar süren entegrasyon maliyetlerinden ve "iki farklı tedarikçi" yönetme karmaşasından kurtulun.',
  },
] as const;

const businessAccordions = [
  {
    title: 'Bütünleşik Envanter Görünümü',
    body:
      'Stoklarınızı online veya mağaza gibi yapay kategorilere ayırmak yerine, tüm envanterinizi gerçek zamanlı ve tek bir havuzda yönetin. Bu merkezi görünüm sayesinde bir ürünün nerede olduğundan bağımsız olarak tüm kanallardan satılabilmesini sağlayın; "yok satma" riskini azaltırken stok maliyetlerinizi optimize edin ve brüt kâr marjınızı artırın.',
  },
  {
    title: 'Operasyonel Çeviklik ve Verimlilik',
    body:
      'Müşteri talebini en uygun lokasyondan karşılayacak şekilde süreçlerinizi otomatikleştirin. Mağaza çalışanlarınızın üzerindeki manuel veri yükünü kaldırarak onları birer satış danışmanına dönüştürün; lojistik maliyetlerinizi düşürürken teslimat hızınızı ve çalışan verimliliğinizi maksimize edin.',
  },
  {
    title: 'Veriye Dayalı Karar Alma',
    body:
      'Fiziksel ve dijitalden gelen verileri ayrı silolar olarak görmekten kurtulun. Müşterilerinizin tüm yolculuğunu tek bir veri modeli üzerinden analiz ederek hangi kanalın daha kârlı olduğunu anlık görün; çok daha isabetli kampanya, fiyatlandırma ve satın alma kararları verin.',
  },
  {
    title: 'Karmaşıklığın Azalması',
    body:
      'Çok kanallı veya omnikanal modellerdeki kanalları birbirine bağlama ve senkronize etme zahmetini geride bırakın. Tüm kanalları tek bir platform üzerinde yöneterek teknik karmaşayı bitirin, çevikliğinizi artırın ve rekabette fark yaratın.',
  },
] as const;

const customerAccordions = [
  {
    title: 'Süreklilik',
    body:
      'Müşterinizin alışverişine online mağazada başlayıp mağazada devam etmesini, satın alımını ise reyonda tamamlamasını sağlayın. Sepetinin, tercihlerinin ve kampanyalı fiyatlarının her kanalda onu takip etmesiyle güven veren, sürtünmesiz ve kanal ayrımı olmayan bir deneyim yaşatın.',
  },
  {
    title: 'Esnek Teslimat ve İade/Değişim Özgürlüğü',
    body:
      'BOPIS ve BORIS gibi modelleri hiçbir ek entegrasyona gerek duymaksızın standart hale getirin. Müşteriniz tüm kanallarda geçerli olan ortak iade çekleri ve hediye kartları ile özgürce ve markanıza güvenerek alışveriş yapsın.',
  },
  {
    title: 'Hiper-Kişiselleştirilmiş Deneyim',
    body:
      "Müşteriniz mağazaya girdiğinde, satış danışmanınız onun geçmiş tercihlerini ve online'da incelediği ürünleri tekil müşteri kimliği sayesinde görsün. Her temas noktasında tanınan ve değer verilen bir misafir hissi yaratın.",
  },
  {
    title: 'Şeffaf ve Anlık Bilgi Akışı',
    body:
      'Müşteriniz aradığı ürünün mağazada olup olmadığını online mağazanızdan gerçek ve anlık stok verisiyle görsün. Mağazaya gittiğinde ürünle karşılaşamama riskini ortadan kaldırarak müşteri memnuniyetini garanti altına alın.',
  },
  {
    title: 'Sürtünmesiz ve Hızlı Ödeme',
    body:
      'Müşteriniz kasada kuyruk beklemeden, satış danışmanının elindeki mobil cihazla veya kiosklar üzerinden ödemesini saniyeler içinde yapsın. Ödeme sürecini alışverişin en hızlı ve zahmetsiz aşamasına dönüştürün.',
  },
] as const;

const paasCards = [
  {
    title: 'MACH Mimarisi',
    description:
      'Mikroservis tabanlı, API-first, cloud-native ve headless yapısıyla inşa edilen Nebim ERA servisleri sayesinde perakende operasyonlarınızda sınırsız ölçeklenin.',
  },
  {
    title: 'Geliştirici Özgürlüğü',
    description:
      'Kendi yazılım ekibiniz veya Nebim teknoloji iş ortakları, Nebim ERA\'nın hazır servislerini ve API\'larını kullanarak işletmenize özel "terzi dikimi" çözümler üretebilsin.',
  },
  {
    title: 'Uygulama Mağazası Ekosistemi',
    description:
      'Çok yakında yayına girecek Nebim Uygulama Mağazası ile ihtiyacınız olan yenilikçi çözüm çeşitliliğine tek tıkla ulaşın.',
  },
] as const;

const hardwareCards = [
  {
    eyebrow: 'Red Dot Tasarım Ödüllü',
    title: 'PAX Elys Serisi',
    image: '/img/pax-elys.png',
    alt: 'PAX Elys POS Workstation',
    description:
      'YN OKC muafiyetli perakendeciler için Android kasa çözümü. Nebim ERA Perakende Satış ile tam entegre çalışarak kasa süreçlerini hızlandırın.',
    items: [
      'Bütünleşik EFT-POS ile interaktif müşteri terminali',
      'Android üzerinde native Nebim ERA POS',
      'Terminal Server maliyetlerine son',
    ],
    tone: 'cyan',
  },
  {
    eyebrow: 'Entegre Ödeme Cihazları',
    title: 'YN OKC ve EFT-POS',
    image: '/img/newland-nft10-front.png',
    alt: 'YN OKC ve EFT-POS entegre cihazlar',
    description:
      "Mevcut notebook, PC ya da Android cihazlarınızda çalışan Nebim ERA Perakende Satış'ın desteklediği YN OKC ve EFT-POS modelleri.",
    items: [
      'GMP-3 protokolü üzerinden tam entegrasyon',
      'Hugin, Ingenico, PAX modelleri',
      'Mevcut donanım yatırımını koruyun',
    ],
    tone: 'purple',
  },
  {
    eyebrow: 'Newland & Zebra',
    title: 'Mağaza Mobil Cihazları',
    image: '/img/zebra-tc21.jpg',
    alt: 'Zebra TC21 mobil cihaz',
    description:
      'Üzerinde Nebim ERA Mağaza Envanter Yönetimi çalıştırarak mağaza arka ofis operasyonlarınızı reyondan ayrılmadan yürütün.',
    items: [
      'Ürün kabul, sayım ve etiket dökümü',
      'Reyonda gerçek zamanlı stok sorgulama',
      'Android native SIM uygulaması',
    ],
    tone: 'neb',
  },
] as const;

const segmentOptions = [
  {
    value: 'v3',
    label: 'Nebim V3 kullanıcısıyım',
    hint: 'V3 ERP ile ERA entegrasyonu',
  },
  {
    value: 'new',
    label: 'Yeni markayım',
    hint: "Bütünleşik perakende'ye sıfırdan başlamak istiyorum",
  },
  {
    value: 'paas',
    label: 'PaaS ile ilgileniyorum',
    hint: 'Geliştirici ekibimizle özel çözüm üretmek istiyorum',
  },
] as const;

const heroMetrics = [
  { value: 'Tek platform', label: 'Mağaza, e-ticaret ve pazaryeri akışı' },
  { value: 'Gerçek zamanlı', label: 'Tek müşteri, tek sipariş, tek stok görünümü' },
  { value: 'PaaS hazır', label: 'MACH mimarisi ve geliştirici ekosistemi' },
] as const;

function ChevronIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function HomePageClient() {
  const [isChannelsExpanded, setIsChannelsExpanded] = useState(false);
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);
  const [isProductFlipped, setIsProductFlipped] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [typewriterStarted, setTypewriterStarted] = useState(false);
  const [typedLength, setTypedLength] = useState(0);
  const [businessOpen, setBusinessOpen] = useState<Record<number, boolean>>({ 0: true });
  const [customerOpen, setCustomerOpen] = useState<Record<number, boolean>>({ 0: true });
  const [activeErpTab, setActiveErpTab] = useState<number | null>(0);
  const [openHardwareCards, setOpenHardwareCards] = useState<Record<number, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    segment: 'v3',
  });

  useEffect(() => {
    if (!typewriterStarted || typedLength >= typewriterText.length) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setTypedLength((current) => Math.min(current + 10, typewriterText.length));
    }, 24);

    return () => window.clearTimeout(timeout);
  }, [typewriterStarted, typedLength]);

  const typedText = typewriterText.slice(0, typedLength);

  return (
    <main className={styles.page}>
      <section className={styles.hero} id="s1">
        <div className={styles.heroNoise}></div>
        <video
          className={styles.heroVideo}
          src="/vids/particles-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className={`wrap ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Bütünleşik Perakende Platformu</span>
            <h1 className={styles.heroTitle}>
              Nebim ERA: <span className="grad-text">Bütünleşik Perakende Ticaretinin Geleceği</span>
            </h1>
            <p className={styles.heroLead}>
              Perakendede <span className={styles.heroMuted}>&ldquo;Çok Kanallı&rdquo;</span> dönem bitti,
              <span className="grad-text"> &ldquo;Bütünleşik&rdquo;</span> dönem başladı.
            </p>
            <p className="t-body">
              Günümüz tüketicisi için online veya fiziksel mağaza ayrımı yoktur; sadece
              &ldquo;alışveriş deneyimi&rdquo; vardır. Nebim ERA ile fiziksel mağaza, online mağaza ve
              pazaryeri süreçlerinizi tek bir platformdan, gerçek zamanlı ve kesintisiz yönetin.
            </p>

            <div className={styles.heroActions}>
              <Link href="#s7" className="btn btn-grad btn-lg">
                Satış Ekibiyle Konuş
              </Link>
              <Link href="/features" className="btn btn-outline btn-lg">
                Tüm Özellikleri İncele
              </Link>
            </div>

            <div className={styles.heroMetrics}>
              {heroMetrics.map((item) => (
                <div key={item.label} className={styles.metricCard}>
                  <div className={styles.metricValue}>{item.value}</div>
                  <div className={styles.metricLabel}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroStage}>
            <div className={styles.stageShell}>
              <div className={styles.stageBadge}>Retail Execution Engine</div>
              <div className={styles.stageTitle}>Tek ürün, tek müşteri, tek indirim, tek sipariş.</div>

              <div className={styles.stageGrid}>
                <div className={styles.stageCard}>
                  <span className={styles.stageKicker}>Mağaza</span>
                  <strong>Kasa, mobil satış, self checkout</strong>
                </div>
                <div className={styles.stageCard}>
                  <span className={styles.stageKicker}>Dijital</span>
                  <strong>E-ticaret, marketplace, AI destekli temas noktaları</strong>
                </div>
                <div className={styles.stageCard}>
                  <span className={styles.stageKicker}>Operasyon</span>
                  <strong>Gerçek zamanlı stok, fiyat ve müşteri verisi</strong>
                </div>
                <div className={styles.stageCard}>
                  <span className={styles.stageKicker}>Geliştirme</span>
                  <strong>PaaS servisleri, API ve genişleme ekosistemi</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-dark" id="s3">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-head-text">
              <div className="sec-eyebrow t-lbl mb3">Neden Bütünleşik Perakende, Neden Nebim ERA?</div>
              <h2 className="t-h1">
                &ldquo;Tek Ürün, Tek Müşteri, Tek İndirim,
                <br />
                Tek Envanter, Tek Sepet, Tek Sipariş&rdquo;
              </h2>
              <p className="t-body mt4" style={{ maxWidth: 640 }}>
                Perakendede veriyi kanallar arasında kopyalama ve senkronize etme dönemini
                kapatın; verinin tüm temas noktalarında tekil, anlık ve bütünleşik kalmasını sağlayın.
              </p>
            </div>
            <div className="sec-head-ico">
              <svg viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>

          <div className={styles.bentoGrid}>
            <article className={`${styles.bentoCard} ${styles.bentoWide}`}>
              <div className={styles.cardTop}>
                <span className={styles.cardPill}>Kanallar</span>
                <div className={styles.cardIcon}>01</div>
              </div>
              <h3 className={styles.cardTitle}>Tüm Satış Kanalları ve Uygulamalar</h3>
              <p className={styles.cardText}>
                Fiziksel ve dijital kanallarınızın hepsinde müşterilerinize bir kanalda başlayıp
                diğer kanalda devam edebilen kesintisiz alışveriş deneyimi sunun.
              </p>

              <div className={`${styles.expandBody} ${isChannelsExpanded ? styles.expandOpen : ''}`}>
                <p className={styles.cardText}>
                  Kasa, reyonda mobil satış, kasiyersiz kasa, online mağaza, stok yönettiğiniz
                  lokasyonlar ve conversational AI asistanları dahil tüm temas noktalarında
                  tutarlı bir müşteri akışı kurun.
                </p>
              </div>

              <button
                type="button"
                className={styles.inlineButton}
                onClick={() => setIsChannelsExpanded((current) => !current)}
              >
                {isChannelsExpanded ? 'Kapat' : 'Devamını oku'}
                <ChevronIcon />
              </button>
            </article>

            <article className={styles.bentoCard}>
              <div className={styles.cardTop}>
                <span className={styles.cardPillAlt}>Müşteri</span>
                <div className={styles.cardIcon}>02</div>
              </div>
              <h3 className={styles.cardTitle}>Tekil Müşteri Kimliği</h3>
              <p className={styles.cardText}>
                Müşterinizi tüm temas noktalarında tekil bir dijital kimlikle tanıyın. Puanlar,
                sepet, kampanyalar ve izinler her kanalda aynı anda güncel kalsın.
              </p>
              <button
                type="button"
                className={styles.inlineButton}
                onClick={() => setIsCustomerModalOpen(true)}
              >
                Detayları gör
                <ArrowIcon />
              </button>
            </article>

            <article className={`${styles.bentoCard} ${styles.flipCard} ${isProductFlipped ? styles.flipped : ''}`}>
              <div className={styles.flipInner}>
                <div className={styles.flipFace}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardPill}>Ürün</span>
                    <div className={styles.cardIcon}>03</div>
                  </div>
                  <h3 className={styles.cardTitle}>Tekil Ürün Kartı</h3>
                  <p className={styles.cardText}>
                    Tüm platformlarda tekil ürün kartı kullanın. Her detayı tek merkezden yönetin,
                    kanallar arası tutarsızlıkları ortadan kaldırın.
                  </p>
                  <button
                    type="button"
                    className={styles.inlineButton}
                    onClick={() => setIsProductFlipped(true)}
                  >
                    Kartı çevir
                    <ArrowIcon />
                  </button>
                </div>

                <div className={`${styles.flipFace} ${styles.flipBack}`}>
                  <h3 className={styles.cardTitle}>Tekil Ürün Kartı</h3>
                  <p className={styles.cardText}>
                    Ürün açıklamalarından teknik özelliklere, fiyatlandırmadan dijital varlıklara kadar
                    her detayı tek bir merkezden yönetin ve tüm temas noktalarına anlık yansıtın.
                    Operasyonel hatayı azaltın, tutarlı ürün deneyimi sunun.
                  </p>
                  <button
                    type="button"
                    className={styles.inlineButton}
                    onClick={() => setIsProductFlipped(false)}
                  >
                    Geri dön
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </article>

            <article className={`${styles.bentoCard} ${isInventoryOpen ? styles.drawerOpen : ''}`}>
              <div className={styles.cardTop}>
                <span className={styles.cardPillWarm}>Envanter</span>
                <div className={styles.cardIcon}>04</div>
              </div>
              <h3 className={styles.cardTitle}>Bütünleşik Envanter</h3>
              <p className={styles.cardText}>
                Tüm kanallarınız için tek bir ortak envanter havuzu oluşturun. Yok satma riskini
                ortadan kaldırın, stok devir hızınızı artırın.
              </p>
              <button
                type="button"
                className={styles.inlineButton}
                onClick={() => setIsInventoryOpen((current) => !current)}
              >
                {isInventoryOpen ? 'Kapat' : 'Detayı aç'}
                <ChevronIcon />
              </button>
              <div className={styles.drawerBody}>
                <p className={styles.cardText}>
                  &ldquo;Mağazada bul&rdquo; veya &ldquo;online al, istediğin mağazadan teslim al&rdquo; gibi esnek
                  seçenekleri standart hale getirirken tüm stok görünümünü şeffaf biçimde yönetin.
                </p>
              </div>
            </article>

            <article className={styles.bentoCard}>
              <div className={styles.cardTop}>
                <span className={styles.cardPillAlt}>Kampanya</span>
                <div className={styles.cardIcon}>05</div>
              </div>
              <h3 className={styles.cardTitle}>Merkezi İndirim ve Kampanya</h3>
              <p className={styles.cardText}>
                Kampanya ve indirimleri müşteriniz hangi kanalda olursa olsun aynı akıllı algoritma
                ile hatasız ve eş zamanlı sunun.
              </p>
              <button
                type="button"
                className={styles.inlineButton}
                onClick={() => {
                  setTypewriterStarted(true);
                  setTypedLength(0);
                }}
              >
                Yazıyı başlat
                <ArrowIcon />
              </button>
              <div className={`${styles.typewriterBox} ${typewriterStarted ? styles.typewriterActive : ''}`}>
                <p>{typedText}</p>
              </div>
            </article>

            <article className={`${styles.bentoCard} ${styles.bentoFull}`}>
              <div className={styles.cardTop}>
                <span className={styles.cardPill}>Sepet</span>
                <div className={styles.cardIcon}>06</div>
              </div>
              <h3 className={styles.cardTitle}>Kesintisiz Sepet ve Sipariş</h3>
              <p className={styles.cardText}>
                Dijital ve fiziksel sepetler arasındaki duvarları yıkın. Online&apos;da başlayan
                alışverişi mağazada tamamlayın, mağazadan alınan ürünü online iade edin.
              </p>
              <button
                type="button"
                className={styles.inlineButton}
                onClick={() => setIsCartOpen((current) => !current)}
              >
                {isCartOpen ? 'Kapat' : 'Kaydırarak keşfet'}
                <ChevronIcon />
              </button>
              <div className={`${styles.scrollBody} ${isCartOpen ? styles.scrollOpen : ''}`}>
                <p className={styles.cardText}>
                  Müşterilerinizin ve mağaza çalışanlarınızın tüm kanallarda aynı ve güncel sepete
                  erişmesini sağlayın. Online&apos;da başlayan kararsızlığı mağazada satışa çevirin,
                  sipariş ve iade akışını tek merkezden yönetin.
                </p>
              </div>
            </article>
          </div>

          <div className={styles.dualPanels}>
            <div className={styles.accordionCard}>
              <div className={styles.panelEyebrow}>Perakende İşletmeniz için Bütünleşik Perakende</div>
              {businessAccordions.map((item, index) => {
                const isOpen = Boolean(businessOpen[index]);

                return (
                  <div key={item.title} className={`${styles.accordionItem} ${isOpen ? styles.accordionOpen : ''}`}>
                    <button
                      type="button"
                      className={styles.accordionButton}
                      onClick={() =>
                        setBusinessOpen((current) => ({ ...current, [index]: !current[index] }))
                      }
                    >
                      <span>{item.title}</span>
                      <span className={styles.accordionArrow}>
                        <ChevronIcon />
                      </span>
                    </button>
                    <div className={styles.accordionBody}>
                      <p>{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={`${styles.accordionCard} ${styles.accordionCardAlt}`}>
              <div className={styles.panelEyebrow}>Müşterileriniz için Bütünleşik Perakende</div>
              {customerAccordions.map((item, index) => {
                const isOpen = Boolean(customerOpen[index]);

                return (
                  <div key={item.title} className={`${styles.accordionItem} ${isOpen ? styles.accordionOpen : ''}`}>
                    <button
                      type="button"
                      className={styles.accordionButton}
                      onClick={() =>
                        setCustomerOpen((current) => ({ ...current, [index]: !current[index] }))
                      }
                    >
                      <span>{item.title}</span>
                      <span className={styles.accordionArrow}>
                        <ChevronIcon />
                      </span>
                    </button>
                    <div className={styles.accordionBody}>
                      <p>{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.centerCta}>
            <p className="t-body">
              Perakendenin yeni standartlarıyla tanışın; Nebim ERA&apos;nın tüm yeteneklerini şimdi
              inceleyin.
            </p>
            <Link href="/features" className="btn btn-grad btn-lg">
              Tüm Özellikleri İncele
            </Link>
          </div>
        </div>
      </section>

      <section className={`sec sec-light ${styles.erpSection}`} id="s4">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-head-text">
              <div className="sec-eyebrow t-lbl mb3">Nebim V3 ERP Gücü, Nebim ERA Çevikliğiyle Birleşiyor</div>
              <h2 className="t-h1">Hibrit Perakende Yönetimi</h2>
              <p className="t-body mt4" style={{ maxWidth: 640 }}>
                Nebim ERA&apos;yı, Türkiye&apos;nin önde gelen perakende ERP&apos;si olan Nebim V3 ERP ile
                ayrı dünyalar gibi değil, tek bir organizmanın parçaları gibi çalıştırın.
              </p>
            </div>
            <div className="sec-head-ico">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
                <path d="M6 8h12" />
                <path d="M6 11h8" />
              </svg>
            </div>
          </div>

          <div className={styles.erpIntro}>
            <h3 className="t-h2">Terminal Server Karmaşasına Son</h3>
            <p className="t-body">
              Nebim V3 ERP&apos;nin derin finansal ve operasyonel tecrübesini arkasına alan Nebim
              ERA, fiziksel mağaza ve dijital ticaret verilerinizi anlık olarak ERP merkezinize aktarır.
            </p>
          </div>

          <div className={styles.erpTabs}>
            {erpTabs.map((tab, index) => {
              const isActive = activeErpTab === index;

              return (
                <button
                  key={tab.title}
                  type="button"
                  className={`${styles.erpTab} ${isActive ? styles.erpTabActive : ''}`}
                  onClick={() => setActiveErpTab((current) => (current === index ? null : index))}
                >
                  <span>{tab.title}</span>
                  <span className={styles.erpTabArrow}>
                    <ChevronIcon />
                  </span>
                </button>
              );
            })}
          </div>

          <div className={`${styles.erpDetail} ${activeErpTab !== null ? styles.erpDetailOpen : ''}`}>
            {activeErpTab !== null && <p>{erpTabs[activeErpTab].description}</p>}
          </div>

          <div className={styles.centerCta}>
            <p className="t-body">
              Uçtan uca kesintisiz bir perakende yönetimi yapın; ERP gücüyle beslenen bütünleşik
              ticaretin detaylarına göz atın.
            </p>
            <Link href="#s7" className="btn btn-grad btn-lg">
              Sinerjiyi Keşfet
            </Link>
          </div>
        </div>
      </section>

      <section className="sec sec-dark" id="s5">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-head-text">
              <div className="sec-eyebrow-p t-lbl mb3">Türkiye&apos;nin İlk Yerel Perakende PaaS&apos;ı</div>
              <h2 className="t-h1">Nebim ERA PaaS: Sadece Bir Yazılım Değil, Bir Geliştirme Platformu</h2>
              <p className="t-body mt4" style={{ maxWidth: 640 }}>
                Türkiye&apos;nin ilk yerel perakende PaaS çözümüyle tanışın. MACH mimarisi ve geliştirici
                ekosistemiyle perakende teknolojisini kendi ihtiyaçlarınıza göre şekillendirin.
              </p>
            </div>
            <div className="sec-head-ico">
              <svg viewBox="0 0 24 24">
                <path d="M8 9l-4 4 4 4" />
                <path d="M16 9l4 4-4 4" />
                <path d="M14 5l-4 14" />
              </svg>
            </div>
          </div>

          <div className={styles.paasStrip}>MACH • API-first • Cloud-native • Headless • Embedded AI</div>

          <div className={styles.paasGrid}>
            {paasCards.map((card, index) => (
              <article key={card.title} className={styles.paasCard}>
                <span className={styles.paasIndex}>0{index + 1}</span>
                <h3 className={styles.paasTitle}>{card.title}</h3>
                <p className={styles.paasText}>{card.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.centerCta}>
            <p className="t-body">
              Hayal ettiğiniz perakende teknolojisini inşa edin; Nebim ERA PaaS&apos;ın sınırsız
              geliştirme dünyasını keşfedin.
            </p>
            <Link href="/paas" className="btn btn-grad btn-lg">
              PaaS Yeteneklerini Gör
            </Link>
          </div>
        </div>
      </section>

      <section className="sec sec-panel" id="s6">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-head-text">
              <div className="sec-eyebrow t-lbl mb3">Pek Yakında</div>
              <h2 className="t-h1">Nebim ERA&apos;nın Yazılım Çevikliğini, Donanımın Gücüyle Buluşturun</h2>
              <p className="t-body mt4" style={{ maxWidth: 640 }}>
                Nebim ERA ile kasa noktalarından reyon ortasına, self-servis alanlarından mobil ödeme
                süreçlerine kadar tüm mağaza operasyonunuzu Nebim-Certified donanım ekosistemi ile
                destekleyin.
              </p>
            </div>
            <div className="sec-head-ico">
              <svg viewBox="0 0 24 24">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <circle cx="12" cy="18" r="1" />
                <path d="M9 5h6" />
              </svg>
            </div>
          </div>

          <div className={styles.hardwareGrid}>
            {hardwareCards.map((card, index) => {
              const isOpen = Boolean(openHardwareCards[index]);

              return (
                <article
                  key={card.title}
                  className={`${styles.hardwareCard} ${styles[`hardware${card.tone[0].toUpperCase()}${card.tone.slice(1)}`]} ${isOpen ? styles.hardwareOpen : ''}`}
                >
                  <div className={styles.hardwareImageWrap}>
                    <Image src={card.image} alt={card.alt} width={600} height={420} className={styles.hardwareImage} />
                  </div>

                  <div className={styles.hardwareBody}>
                    <div className={styles.hardwareEyebrow}>{card.eyebrow}</div>
                    <h3 className={styles.hardwareTitle}>{card.title}</h3>
                    <p className={styles.hardwareText}>{card.description}</p>

                    <button
                      type="button"
                      className={styles.inlineButton}
                      onClick={() =>
                        setOpenHardwareCards((current) => ({ ...current, [index]: !current[index] }))
                      }
                    >
                      {isOpen ? 'Kapat' : 'Devamını oku'}
                      <ChevronIcon />
                    </button>

                    <div className={styles.hardwareFeatures}>
                      {card.items.map((item) => (
                        <div key={item} className={styles.hardwareFeature}>
                          <span className={styles.hardwareDot}></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className={styles.hardwareCta}>
            <p className={styles.hardwareCtaText}>
              Nebim iş ortaklarının onaylı donanım ve ödeme çözümlerini inceleyin.
            </p>
            <Link href="/certified" className={styles.arrowLink}>
              Onaylı Donanımları Keşfet
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="sec sec-dark" id="s7">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-head-text">
              <div className="sec-eyebrow t-lbl mb3">Hemen Başlayın</div>
              <h2 className="t-h1">
                Perakendede Geleceği <span className="grad-text">Bugün İnşa Edin</span>
              </h2>
              <p className="t-body mt4" style={{ maxWidth: 480 }}>
                Çok kanallı karmaşadan kurtulun; Nebim ERA ile gerçek bütünleşik perakende çağına
                bugün adım atın.
              </p>
            </div>
            <div className="sec-head-ico">
              <svg viewBox="0 0 24 24">
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
          </div>

          {isSubmitted ? (
            <div className={styles.successCard}>
              <div className={styles.successIcon}>
                <svg viewBox="0 0 28 28">
                  <path d="M5 14l6 6L23 8" />
                </svg>
              </div>
              <h3 className="t-h2">Talebiniz Alındı!</h3>
              <p className="t-sm">Uzmanlarımız en kısa sürede sizinle iletişime geçecek.</p>
            </div>
          ) : (
            <form
              className={styles.form}
              onSubmit={(event) => {
                event.preventDefault();
                setIsSubmitted(true);
              }}
            >
              <div className="form-row">
                <input
                  type="text"
                  className="df-inp"
                  placeholder="Ad Soyad"
                  required
                  value={formData.name}
                  onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                />
                <input
                  type="text"
                  className="df-inp"
                  placeholder="Şirket Adı"
                  required
                  value={formData.company}
                  onChange={(event) => setFormData((current) => ({ ...current, company: event.target.value }))}
                />
              </div>

              <div className="form-row">
                <input
                  type="email"
                  className="df-inp"
                  placeholder="E-posta"
                  required
                  value={formData.email}
                  onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                />
                <input
                  type="tel"
                  className="df-inp"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
                />
              </div>

              <div className={styles.segmentGroup}>
                {segmentOptions.map((option) => (
                  <label key={option.value} className={styles.segmentOption}>
                    <input
                      type="radio"
                      name="segment"
                      value={option.value}
                      checked={formData.segment === option.value}
                      onChange={(event) =>
                        setFormData((current) => ({ ...current, segment: event.target.value }))
                      }
                    />
                    <div>
                      <div className="t-h4">{option.label}</div>
                      <div className="t-xs t3">{option.hint}</div>
                    </div>
                  </label>
                ))}
              </div>

              <button type="submit" className={`btn btn-grad btn-lg ${styles.submitButton}`}>
                Satış Ekibiyle Konuş
              </button>

              <p className={styles.formNote}>
                Formu göndererek <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link> ve{' '}
                <Link href="/kvkk-aydinlatma">KVKK Aydınlatma Metni</Link>&apos;ni okuduğunuzu onaylıyorsunuz.
              </p>
            </form>
          )}
        </div>
      </section>

      {isCustomerModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsCustomerModalOpen(false)}>
          <div className={styles.modalCard} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setIsCustomerModalOpen(false)}
              aria-label="Kapat"
            >
              ×
            </button>
            <h3 className={styles.modalTitle}>Tekil Müşteri Kimliği</h3>
            <p className={styles.modalText}>
              Nebim ERA ile müşterinizi fiziksel mağaza kasasında, self-servis kioskta veya mobil
              uygulamada tekil bir dijital kimlikle karşılayın. Puanlar, kampanyalar, güncel sepet,
              adres bilgileri ve izinler her temas noktasında aynı anda güncel kalsın; mağaza
              ekipleriniz de aynı bilgiye erişerek kişiselleştirilmiş servis sunabilsin.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

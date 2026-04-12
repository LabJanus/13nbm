import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.brand}>
            <Image src="/img/era_logo_final.svg" alt="Nebim ERA" width={138} height={28} className={styles.eraLogo} />
          </div>
          <p className={styles.desc}>Türkiye&apos;nin ilk yerel bütünleşik perakende platformu. Fiziksel mağaza, e-ticaret ve pazaryeri tek platformda.</p>
          <div className={styles.logos}>
            <Image src="/img/nebim_logo.svg" alt="Nebim" width={84} height={22} className={styles.partnerLogo} />
            <span className={styles.sep}></span>
            <a href="https://param.com.tr" target="_blank" rel="noopener noreferrer" aria-label="Param Grubu">
              <Image src="/img/param-logo.svg" alt="Param Grubu" width={84} height={22} className={styles.partnerLogo} />
            </a>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>NEBİM ERA</div>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>Genel Bakış</Link>
            <Link href="/features" className={styles.link}>Tüm Özellikler</Link>
            <Link href="/paas" className={styles.link}>Platform (PaaS)</Link>
            <Link href="/certified" className={styles.link}>Certified</Link>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>PAKETLER</div>
          <div className={styles.links}>
            <Link href="/paket/paket-1" className={styles.link}>Paket 1</Link>
            <Link href="/paket/paket-2" className={styles.link}>Paket 2</Link>
            <Link href="/paket/paket-3" className={styles.link}>Paket 3</Link>
            <Link href="/paket/custom" className={styles.link}>Custom</Link>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>NEBİM</div>
          <div className={styles.links}>
            <a href="https://nebim.com.tr" target="_blank" rel="noopener noreferrer" className={styles.link}>Hakkında</a>
            <a href="https://nebim.com.tr/is-ortaklari" target="_blank" rel="noopener noreferrer" className={styles.link}>İş Ortakları</a>
            <a href="https://nebim.com.tr/kariyer" target="_blank" rel="noopener noreferrer" className={styles.link}>Kariyer</a>
            <a href="https://nebim.com.tr/iletisim" target="_blank" rel="noopener noreferrer" className={styles.link}>İletişim</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className="t-xs">&copy; 2026 Nebim Neyir Bilgisayar Sanayii ve Hizmetleri A.Ş. Tüm hakları saklıdır.</span>
        <div className={styles.legal}>
          <Link href="/gizlilik-politikasi" className={styles.link}>Gizlilik Politikası</Link>
          <Link href="/kvkk-aydinlatma" className={styles.link}>KVKK Aydınlatma</Link>
          <Link href="/cerez-politikasi" className={styles.link}>Çerez Politikası</Link>
        </div>
      </div>
    </footer>
  );
}

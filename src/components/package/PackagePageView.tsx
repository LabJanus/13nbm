import Link from 'next/link';
import styles from '@/app/paket/[slug]/page.module.css';
import { packagePages, type PackagePage } from '@/data/packagePages';

export function PackagePageView({ packagePage }: { packagePage: PackagePage }) {
  return (
    <main>
      <section className={`sec sec-dark ${styles.hero} ${styles[packagePage.heroVariant]}`}>
        <div className={`wrap text-c ${styles.content}`}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot}></span>
            Paket
          </div>

          <h1 className={`t-display ${styles.title}`}>{packagePage.title}</h1>
          <p className={`t-body ${styles.description}`}>{packagePage.description}</p>

          <div className={styles.switcher}>
            {packagePages.map((item) => (
              <Link
                key={item.slug}
                href={`/paket/${item.slug}`}
                className={`${styles.switcherLink} ${item.slug === packagePage.slug ? styles.switcherLinkActive : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import styles from '@/app/(legal)/legal.module.css';

type LegalPageProps = {
  current: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export function LegalPage({
  current,
  title,
  subtitle,
  children,
}: LegalPageProps) {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Sayfa yolu">
        <div className={styles.crumbs}>
          <Link href="/">Nebim ERA</Link>
          <span className={styles.sep}>&rsaquo;</span>
          <span className={styles.current}>{current}</span>
        </div>
        <ThemeToggle />
      </nav>

      <div className={styles.header}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className={styles.body}>{children}</div>

      <footer className={styles.footer}>
        <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>
        <Link href="/kvkk-aydinlatma">KVKK Aydınlatma</Link>
        <Link href="/cerez-politikasi">Çerez Politikası</Link>
        <p>&copy; 2026 Nebim Neyir Bilgisayar Sanayii ve Hizmetleri A.Ş.</p>
      </footer>
    </main>
  );
}

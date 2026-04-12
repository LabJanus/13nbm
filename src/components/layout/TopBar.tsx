import styles from './TopBar.module.css';

interface TopBarProps {
  onDismiss: () => void;
}

export function TopBar({ onDismiss }: TopBarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <ol className={styles.bc} aria-label="Sayfa yolu">
          <li className={styles.item}>
            <a href="https://nebim.com.tr" className={styles.link}>nebim.com.tr</a>
          </li>
          <li className={styles.item}>
            <span className={styles.sep} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4 2.5l3.5 3.5L4 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </li>
          <li className={`${styles.item} ${styles.active}`}>
            <span className={styles.dot}></span>
            <span className={styles.link}>Nebim ERA</span>
          </li>
        </ol>
        <button type="button" className={styles.close} onClick={onDismiss} aria-label="Kapat">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

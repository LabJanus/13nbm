import styles from './TopBar.module.css';

export function TopBar() {
  return (
    <div className={styles.bar}>
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
    </div>
  );
}

'use client';

import styles from './AccordionItem.module.css';

type AccordionItemProps = {
  id: string;
  title: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
};

export function AccordionItem({
  id,
  title,
  isOpen,
  onToggle,
  children,
}: AccordionItemProps) {
  return (
    <div id={id} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        type="button"
        className={styles.button}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        onClick={() => onToggle(id)}
      >
        <span className={styles.title}>{title}</span>
        <span className={styles.arrow} aria-hidden="true">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 3.5L5 6.5l3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      <div id={`${id}-content`} className={styles.body}>
        <div className={styles.bodyInner}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
}

import styles from './ribbon.module.css';

export function Ribbon() {
  return (
    <div className={styles.ribbonContainer}>
      <div className={styles.ribbon} style={{ backgroundColor: 'var(--important-A)' }}></div>
      <div className={styles.ribbon} style={{ backgroundColor: 'var(--important-B)' }}></div>
      <div className={styles.ribbon} style={{ backgroundColor: 'var(--important-C)' }}></div>
    </div>
  );
}
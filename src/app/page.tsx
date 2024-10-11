import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Video Snipping Tool</h1>
      <div className={styles.grid}></div>
    </div>
  );
}

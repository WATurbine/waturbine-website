import styles from '../../styles/about.module.css';

export const metadata = {
  title: 'About Us',
  description: 'Learn more about the WATurbine team and our journey.',
};

export default function About() {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.aboutMain} id={styles.aboutbg}>
        <h1>ABOUT US</h1>
      </div>
      <div className={styles.description}>
        {/* Content to be added */}
      </div>
    </div>
  );
}

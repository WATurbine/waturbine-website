import styles from '../../styles/subteams.module.css';

export const metadata = {
  title: 'Subteams',
  description: 'Discover the subteams for WATurbine - Aerodynamics, Mechanical, Structural, Power, Controls, and more.',
};

export default function Subteams() {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.subMain}>
        <h1>SUBTEAMS</h1>
      </div>
      <div className={styles.subSecond}>
        <h2>Take a look at our team overview:</h2>
        <iframe
          className={styles.pdf}
          src="/WATurbine_first.pdf"
          style={{ border: 'none' }}
          title="WATurbine Team Overview"
        ></iframe>
      </div>
    </div>
  );
}

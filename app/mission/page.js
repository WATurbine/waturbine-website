import styles from '../../styles/mission.module.css';

export const metadata = {
  title: 'Our Mission',
  description: 'Learn about WATurbine\'s mission to design practical, efficient small wind turbines.',
};

export default function Mission() {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.missionMain}>
        <h1 className={styles.heroTitle}>OUR MISSION</h1>
      </div>
      <div className={styles.content}>
        <p className={styles.lede}>
          WATurbine is a student team building a small wind turbine that makes clean, reliable power
          more accessible. We bring together aerodynamics, mechanical design, controls, and
          structural engineering to improve performance while keeping the system practical to build,
          test, and refine.
        </p>

        {/* Replace placeholders with real project images as media is finalized. */}
        <div className={styles.placeholderGrid} aria-label="Mission image placeholders">
          <div className={styles.imagePlaceholder} role="img" aria-label="Competition photo placeholder">
            <span>Competition Photo Placeholder</span>
          </div>
          <div className={styles.imagePlaceholder} role="img" aria-label="Turbine detail placeholder">
            <span>Turbine Detail Placeholder</span>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>International Small Wind Turbine Competition</h2>
          <p className={styles.sectionText}>
            Each season we take our prototype to the International Small Wind Turbine Competition, a
            global challenge where university teams test their designs in the wind tunnel and in the
            field. The competition pushes us to improve blade aerodynamics, drivetrain efficiency,
            and control systems that respond to changing wind conditions.
          </p>
          <p className={styles.sectionText}>
            Competing internationally means balancing new ideas with reliability. We focus on
            manufacturability, fast iteration, and careful validation. We benchmark against industry
            metrics, measure power curves, and refine the design for quiet, durable performance in
            different climates.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Why It Matters</h2>
          <p className={styles.sectionText}>
            Small scale wind can improve energy resilience for remote and underserved communities.
            By showing that compact turbines can be efficient, quiet, and durable, we move closer to
            a future where clean energy is available in more places.
          </p>
          <div className={styles.imagePlaceholder} role="img" aria-label="Community impact placeholder">
            <span>Community Impact Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
}

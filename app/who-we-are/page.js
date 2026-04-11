import TeamCard from '../../Components/TeamCard';
import Image from 'next/image';
import styles from '../../styles/mission.module.css';
import { displayedTeamMembers } from '@/lib/teamMembers';

export const metadata = {
  title: 'Who We Are',
  description: "Learn about WATurbine's mission to design practical, efficient small wind turbines.",
};

export default function WhoWeAre() {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.missionMain}>
        <h1 className={styles.heroTitle}>WHO WE ARE</h1>
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
          <div className={styles.imagePlaceholder} aria-label="Competition photo">
            <Image
              src="/images/image (8).webp"
              alt="WATurbine competition photo"
              fill
              className={styles.placeholderImage}
              sizes="(max-width: 900px) 90vw, 44vw"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.imagePlaceholder} aria-label="Turbine detail photo">
            <Image
              src="/mech1.webp"
              alt="WATurbine turbine detail"
              fill
              className={styles.placeholderImage}
              sizes="(max-width: 900px) 90vw, 44vw"
              loading="lazy"
              decoding="async"
            />
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
          <div className={styles.imagePlaceholder} aria-label="Community impact photo">
            <Image
              src="/images/image (4).webp"
              alt="WATurbine community impact"
              fill
              className={styles.placeholderImage}
              sizes="(max-width: 900px) 90vw, 100vw"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Our Team</h2>
          <div className={styles.teamGrid}>
            {displayedTeamMembers.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
                alt={member.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

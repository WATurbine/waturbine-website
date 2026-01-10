import SponsorCard from '@/Components/SponsorCard';
import styles from '@/styles/sponsors.module.css';
import Link from 'next/link';
import { config } from '@/lib/config';

export const metadata = {
  title: 'Sponsors',
  description: 'Thank you to our sponsors who make WATurbine possible.',
};

export default function Sponsors() {
  // Add your sponsor logos here
  const sponsors = [
    // Example: { name: 'Sponsor Name', logo: '/path/to/logo.png' }
  ];

  return (
    <div className={styles.sponsorsContainer}>
      <h1 className={styles.sponsorsTitle}>SPONSORS</h1>
      <div className={styles.sponsorsGrid}>
        {sponsors.map((sponsor, index) => (
          <SponsorCard 
            key={index}
            name={sponsor.name}
            logo={sponsor.logo}
          />
        ))}
        {/* Placeholder cards for demonstration */}
        {sponsors.length === 0 && (
          <>
            <div className={styles.sponsorCard}>
              <p style={{ color: 'var(--white)', opacity: 0.5 }}>Sponsor Logo</p>
            </div>
            <div className={styles.sponsorCard}>
              <p style={{ color: 'var(--white)', opacity: 0.5 }}>Sponsor Logo</p>
            </div>
            <div className={styles.sponsorCard}>
              <p style={{ color: 'var(--white)', opacity: 0.5 }}>Sponsor Logo</p>
            </div>
          </>
        )}
      </div>
      <div className={styles.ctaSection}>
        <Link href={config.external.sponsorshipPdf} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
          View our sponsorship package
        </Link>
      </div>
    </div>
  );
}

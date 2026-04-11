import SponsorCard from '@/Components/SponsorCard';
import styles from '@/styles/sponsors.module.css';
import Link from 'next/link';
import { config } from '@/lib/config';

export const metadata = {
  title: 'Sponsors',
  description: 'Thank you to our sponsors who make WATurbine possible.',
};

export default function Sponsors() {
  // Primary editing surface for sponsor content.
  // Logos should reference files in /public for predictable static asset delivery.
  const sponsorTiers = {
    platinum: [
      { name: 'Ledcor', logo : '/sponsors/Ledcor.png' },
    ],
    gold: [
      
    ],
    silver: [
      
    ],
    bronze: [
      { name: 'SenezCo', logo : '/sponsors/SenezCo.png' },
      { name: 'Caitlin Stone Consulting', logo : '/sponsors/CaitlinStoneConsulting.png' },
      { name: 'Kenesto', logo : '/sponsors/Kenesto.png' },
      { name: 'Ansys', logo : '/sponsors/ANSYS.png' },
    ],
  };

  const tierConfig = {
    platinum: { label: 'Platinum', className: styles.platinumTier, gridClass: styles.platinumGrid },
    gold: { label: 'Gold', className: styles.goldTier, gridClass: styles.goldGrid },
    silver: { label: 'Silver', className: styles.silverTier, gridClass: styles.silverGrid },
    bronze: { label: 'Bronze', className: styles.bronzeTier, gridClass: styles.bronzeGrid },
  };

  return (
    <div className={styles.sponsorsContainer}>
      <h1 className={styles.sponsorsTitle}>
        <span className={styles.sponsorsTitleText}>SPONSORS</span>
      </h1>
      <div className={styles.ctaSection}>
        <div className={styles.ctaCopyBlock}>
          <p className={styles.ctaIntro}>
            WATurbine is built by students who are working to advance practical clean energy solutions while developing the technical and leadership skills needed to shape a more sustainable future.
          </p>
          <p className={styles.ctaIntro}>
            Sponsoring our team directly supports hands-on education in renewable energy design, testing, and deployment. Whether through funding, tools, software, materials, or mentorship, your support helps transform classroom learning into real-world impact.
          </p>
        </div>
        <Link href={config.external.sponsorshipPdf} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
          View our sponsorship package
        </Link>
      </div>
      
      {Object.entries(sponsorTiers).map(([tierKey, sponsors]) => 
        sponsors.length > 0 && (
          <div key={tierKey} className={styles.tierSection}>
            <h2 className={`${styles.tierTitle} ${tierConfig[tierKey].className}`}>
              {tierConfig[tierKey].label}
            </h2>
            <div className={`${styles.sponsorsGrid} ${tierConfig[tierKey].gridClass}`}>
              {sponsors.map((sponsor, index) => (
                <SponsorCard 
                  key={index}
                  name={sponsor.name}
                  logo={sponsor.logo}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

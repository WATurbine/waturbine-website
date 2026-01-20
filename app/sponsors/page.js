import SponsorCard from '@/Components/SponsorCard';
import styles from '@/styles/sponsors.module.css';
import Link from 'next/link';
import { config } from '@/lib/config';

export const metadata = {
  title: 'Sponsors',
  description: 'Thank you to our sponsors who make WATurbine possible.',
};

export default function Sponsors() {
  // Organize sponsors by tier
  const sponsorTiers = {
    platinum: [
      // Add platinum tier sponsors here
      // { name: 'Sponsor Name', logo: '/path/to/logo.png' }
    ],
    gold: [
      { name: 'SenezCo', logo : "/SenezCo.png"},
      { name: 'Caitlin Stone Consulting', logo : "/CaitlinStoneConsulting.png"},
      { name: 'Kenesto', logo : "/Kenesto.png"},
    ],
    silver: [
      { name: 'Ledcor', logo : "/Ledcor.png"},
      { name: 'Ansys', logo : "/Ansys.png"},
    ],
    bronze: [
      // Add bronze tier sponsors here
      // { name: 'Sponsor Name', logo: '/path/to/logo.png' }
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
      <h1 className={styles.sponsorsTitle}>SPONSORS</h1>
      
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
      <div className={styles.ctaSection}>
        <Link href={config.external.sponsorshipPdf} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
          View our sponsorship package
        </Link>
      </div>
    </div>
  );
}

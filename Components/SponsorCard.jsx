import Image from 'next/image';
import styles from '@/styles/sponsors.module.css';

export default function SponsorCard({ logo, name, alt }) {
  return (
    <div className={styles.sponsorCard}>
      <Image 
        src={logo} 
        alt={alt || `${name} logo`}
        width={200}
        height={100}
        className={styles.sponsorLogo}
      />
    </div>
  );
}

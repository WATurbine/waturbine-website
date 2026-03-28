import Image from 'next/image';
import styles from '@/styles/mission.module.css';

export default function TeamCard({ image, name, title, alt }) {
  return (
    <div className={styles.teamCard}>
      {image && (
        <Image 
          src={image} 
          alt={alt || `${name}`}
          fill
          className={styles.teamCardImage}
        />
      )}
      <div className={styles.teamCardOverlay}>
        <span className={styles.teamCardName}>{name}</span>
        <span className={styles.teamCardTitle}>{title}</span>
      </div>
    </div>
  );
}

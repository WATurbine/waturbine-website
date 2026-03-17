import Link from 'next/link';
import styles from '@/styles/socialLinks.module.css';
import { config } from '@/lib/config';

export default function SocialLinks() {
  return (
    <div className={styles.socialLinksContainer}>
      <Link 
        href={config.social.linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6 z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </Link>
      <Link 
        href={config.social.instagram} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.socialLink}
        aria-label="Instagram"
        title="Instagram"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37 z"></path>
          <circle cx="17.5" cy="6.5" r="1.5"></circle>
        </svg>
      </Link>
    </div>
  );
}

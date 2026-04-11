import Link from 'next/link';
import Image from 'next/image';
import ContactForm from './ContactForm';
import SocialLinks from '@/Components/SocialLinks';
import styles from '../../styles/subteams.module.css';
import { config } from '@/lib/config';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the WATurbine team.',
};

const carouselImages = [
  // This list drives the looping marquee above the contact form.
  { src: '/images/image (1).webp', alt: 'WATurbine carousel image 1' },
  { src: '/images/image (7).webp', alt: 'WATurbine carousel image 7' },
  { src: '/images/image (3).webp', alt: 'WATurbine carousel image 3' },
  { src: '/images/image (10).webp', alt: 'WATurbine carousel image 10' },
  { src: '/images/image (5).webp', alt: 'WATurbine carousel image 5' },
  { src: '/images/image (12).webp', alt: 'WATurbine carousel image 12' },
  { src: '/images/image (2).webp', alt: 'WATurbine carousel image 2' },
  { src: '/images/image (9).webp', alt: 'WATurbine carousel image 9' },
  { src: '/images/image (6).webp', alt: 'WATurbine carousel image 6' },
  { src: '/images/image (11).webp', alt: 'WATurbine carousel image 11' },
  { src: '/images/image (4).webp', alt: 'WATurbine carousel image 4' },
  { src: '/images/image (8).webp', alt: 'WATurbine carousel image 8' },
];

export default function Contact() {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.subMain}>
        <h1>CONTACT US</h1>
      </div>
      <div className={styles.subSecond}>
        <div className={styles.contactShell}>
          <SocialLinks />
          <div className={styles.contactCarousel} aria-hidden="true">
            <div className={styles.carouselTrack}>
              {[...carouselImages, ...carouselImages].map((image, index) => (
                <div className={styles.carouselItem} key={`${image.alt}-${index}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="200px"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
          <h2>We would love to hear from you.</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactPreview}>
              <iframe
                title="WATurbine Instagram preview"
                src={`${config.social.instagram}embed`}
                loading="lazy"
                allow="encrypted-media"
                referrerPolicy="no-referrer-when-downgrade"

                // Deprecated but retained because Instagram embed rendering clips without it.
                scrolling="no"
                style={{ overflow: 'hidden' }}
              />
            </div>
            <div className={styles.contactCard}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

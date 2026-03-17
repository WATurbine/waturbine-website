import Link from 'next/link';
import Image from 'next/image';
import ContactForm from './ContactForm';
import SocialLinks from '@/Components/SocialLinks';
import styles from '../../styles/subteams.module.css';
import { config } from '@/lib/config';
import aboutImage from '../../assets/about.jpg';
import missionImage from '../../assets/mission.jpg';
import smallWindImage from '../../assets/smallwind.jpg';
import subteamImage from '../../assets/subteam.jpg';
import backgroundImage from '../../assets/background2.jpg';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the WATurbine team.',
};

const carouselImages = [
  // This list drives the looping marquee above the contact form.
  { src: aboutImage, alt: 'WATurbine about' },
  { src: missionImage, alt: 'WATurbine mission' },
  { src: smallWindImage, alt: 'Small wind turbine' },
  { src: subteamImage, alt: 'WATurbine subteam' },
  { src: backgroundImage, alt: 'WATurbine background' },
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
                  <Image src={image.src} alt={image.alt} fill sizes="200px" />
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

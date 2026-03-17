import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/whitelogo.png';
import styles from '@/styles/Home.module.css';
import { config } from '@/lib/config';
import TurbineScrollAnimation from '../Components/animations/TurbineAnimation';
import AnimatedText from '../Components/AnimatedText';
import SubteamsSection from '../Components/SubteamsSection';

export const metadata = {
  title: 'Home',
  description: config.site.description,
};

export default function Home() {
  return (
    <>
      {/* Hero and About section - isolated container with fixed layout */}
      <div className={styles.heroAboutContainer}>
        <div className={styles.heroWrap}>
          <section className={styles.main}>
            <Image
              className={styles.heroLogo}
              src={logo}
              alt="WATurbine logo"
              width={500}
              height={200}
              priority
            />
          </section>
          <TurbineScrollAnimation />
        </div>
        {/* spacer to create scroll distance so turbine rotation can complete before about shows */}
        <div className={styles.heroSpacer} aria-hidden="true" />
        <section className={styles.mainAbout} aria-label="About WATurbine">
          <div className={styles.aboutText}>
            <AnimatedText>
              <h1>WHO WE ARE</h1>
            </AnimatedText>
          </div>
        </section>
        <section className={styles.descriptionSection}>
          <div className={styles.descriptionContent}>
            <AnimatedText>
              <p className={styles.descriptionText}>
                <span className={styles.highlight}>WATurbine</span> is a team of ambitious engineering students
                from the University of Waterloo, dedicated to driving innovation in
                the fields of renewable energy and sustainable technology. Our goal
                is to design and build the most efficient and sustainable small wind
                turbine possible for the <Link href="https://www.hanze.nl/en/research/centres/entrance-centre-of-expertise-energy/projects/international-small-wind-turbine-contest-iswtc" target="_blank" rel="noopener noreferrer" className={styles.textLink}>International Small Wind Turbine
                Competition</Link>.
              </p>
              <p className={styles.descriptionText}>
                As a subsidiary of the University of Waterloo&apos;s Engineers
                Without Borders Chapter, WATurbine aims to embody the Engineers
                Without Borders vision through wind power advancement.
              </p>
            </AnimatedText>
          </div>
        </section>
        {/* Spacer to push content below the description section */}
        <div style={{ height: '40vh' }} aria-hidden="true" />
      </div>

      {/* Large spacer between about section and subteams */}
      <div style={{ height: '20vh' }} aria-hidden="true" />
      
      {/* Subteams Section with Staggered Cascade Wind Effect */}
      <SubteamsSection />

      <section className={styles.missionCtaSection} aria-label="Our Mission call to action">
        <Link href="/mission" className={styles.missionCtaLink}>
          Interested? Learn more about Our Mission
        </Link>
      </section>
    </>
  );
}

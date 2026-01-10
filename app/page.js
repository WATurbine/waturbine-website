import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/whitelogo.png';
import styles from '@/styles/Home.module.css';
import { config } from '@/lib/config';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AirIcon from '@mui/icons-material/Air';
import ComputerIcon from '@mui/icons-material/Computer';
import TurbineScrollAnimation from '../Components/animations/TurbineAnimation';
import AnimatedText from '../Components/AnimatedText';

export const metadata = {
  title: 'Home',
  description: config.site.description,
};

export default function Home() {
  return (
    <>
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
      <div className={styles.work}>
        <div className={styles.rightContainer} id={styles.estateLeft}>
          <h1>OUR MISSION</h1>
          <p>
            We are passionate about our mission to create a more sustainable
            future for everyone. Check out the global impact that we can make
            together.
          </p>
          <Link href="/mission">
            <button>Learn more</button>
          </Link>
        </div>
        <div className={styles.leftContainer} id={styles.estateRight}>
          <h1>The Competition</h1>
          <Link href={config.external.competition} target="_blank" rel="noopener noreferrer">
            <button>IWSTC</button>
          </Link>
        </div>
      </div>
      <div className={styles.work}>
        <div className={styles.leftContainer}>
          <div className={styles.borderWrap}>
            <h1>SUBTEAMS</h1>
            <h3>6 total subteams within WATurbine!</h3>
            <p>
              Get to know more about each subteam, and how your skills might be
              aligned with the team&#39;s needs!
            </p>
            <Link href="/subteams">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.borderWrap} id={styles.subteamSection}>
            <div className={styles.wrapDiv}>
              <div className={styles.third}>
                <AirIcon />
                <div className={styles.textBox}>
                  <h3>Aerodynamics</h3>
                </div>
              </div>
              <div className={styles.third}>
                <SettingsIcon />
                <div className={styles.textBox}>
                  <h3>Mechanical</h3>
                </div>
              </div>
              <div className={styles.third}>
                <AccountBalanceIcon />
                <div className={styles.textBox}>
                  <h3>Structural</h3>
                </div>
              </div>
            </div>
            <div className={styles.wrapDiv}>
              <div className={styles.third}>
                <ElectricBoltIcon />
                <div className={styles.textBox}>
                  <h3>Power</h3>
                </div>
              </div>
              <div className={styles.third}>
                <ComputerIcon />
                <div className={styles.textBox}>
                  <h3>Controls</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.work}>
        <div className={styles.rightContainer}>
          <div className={styles.sponsorWrap}>
            <h1>SPONSOR US!</h1>
            <p>
              Contribute to creating a more sustainable future, in a meaningful
              way.
            </p>
            <Link href={config.external.sponsorshipPdf} target="_blank" rel="noopener noreferrer">
              <button>SPONSORSHIP</button>
            </Link>
          </div>
        </div>
        <div className={styles.leftContainer}>
          <h1>JOIN OUR TEAM!</h1>
          <Link href={config.social.discord} target="_blank" rel="noopener noreferrer">
            <button>I&#39;m Interested!</button>
          </Link>
        </div>
      </div>
    </>
  );
}

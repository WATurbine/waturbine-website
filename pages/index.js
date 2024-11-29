import Head from "next/head";
import Image from "next/image";
import logo from '../assets/whitelogo.png'
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AirIcon from '@mui/icons-material/Air';
import ComputerIcon from '@mui/icons-material/Computer';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>  
    <Head>
        <title>WATURBINE</title>
        <meta name="description" content="University of Waterloo small wind turbine design team. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className = {styles.main}>
        <Image className = {styles.heroLogo} src = {logo}/>
      </main>
      <div className = {styles.mainAbout}>
        <div className = {styles.aboutText}>
        <h1>WHO WE ARE</h1>
        <h3><span>WATurbine</span> is a a team of ambitious engineering students from the University of Waterloo, dedicated to driving innovation in the fields of renewable energy and sustainable technology. Our goal is to design and build the most efficient and sustainable small wind turbine possible for the International Small Wind Turbine Competition.</h3>
        <h3>As a subsidiary of the University of Waterloo&#39;s Engineers Without Borders Chapter, WATurbine aims to embody the Engineers Without Borders vision through wind power advancement.
        </h3>
        <h3></h3>
        </div>
      </div>
      <div className = {styles.work}>
        <div className = {styles.rightContainer} id = {styles.estateLeft}>
          <h1>OUR MISSION</h1>
          <p>We are passionate about our mission to create a more sustainable future for everyone. Check out the global impact that we can make together.</p>
          <Link href = "/mission">
            <button>Learn more</button>
          </Link>
        </div>
        <div className = {styles.leftContainer} id = {styles.estateRight}>
          <h1>The Competition</h1>
            <Link href = 'https://www.hanze.nl/en/research/centres/entrance-centre-of-expertise-energy/projects/international-small-wind-turbine-contest-iswtc' target = '_blank'> <button>IWSTC</button></Link>
        </div>
      </div>
      <div className = {styles.work}>
        <div className = {styles.leftContainer}>
          <div className = {styles.borderWrap}>
        <h1>SUBTEAMS</h1>
          <h3>6 total subteams within WATurbine!</h3>
          <p>Get to know more about each subteam, and how your skills might be aligned with the team&#39;s needs!</p>
          <Link href = '/subteams'>
            <button>Learn More</button>
          </Link>
          </div>
        </div>
        <div className = {styles.rightContainer}>
          <div className = {styles.borderWrap} id = {styles.subteamSection}>
          <div className = {styles.wrapDiv}>
            <div className = {styles.third}>
              <AirIcon/>
              <div className = {styles.textBox}>
                <h3>Aerodynamics</h3>
              </div>
            </div>
            <div className = {styles.third}>
              <SettingsIcon/>
              <div className = {styles.textBox}>
                <h3>Mechanical</h3>
              </div>  
            </div>
            <div className = {styles.third}>
              <AccountBalanceIcon/>
              <div className = {styles.textBox}>
                <h3>Structural</h3>
              </div>
            </div>
          </div>
          <div className = {styles.wrapDiv}>
            <div className = {styles.third}>
              <ElectricBoltIcon/>
              <div className = {styles.textBox}>
                <h3>Power</h3>
              </div>
            </div>
            <div className = {styles.third}>
              <ComputerIcon/>
              <div className = {styles.textBox}>
                <h3>Controls</h3>
              </div>
            </div>
          </div>
          
        </div>
        </div>
      </div>
      <div className = {styles.work}>
        <div className = {styles.rightContainer}>
          <div className = {styles.sponsorWrap}>
            <h1>SPONSOR US!</h1>
            <p>Contribute to creating a more sustainable future, in a meaningful way.</p>
            <Link href = '/Waturbine_Sponsorship.pdf' target = "_blank">
              <button>SPONSORSHIP</button>
            </Link>
          </div>
        </div>
        <div className = {styles.leftContainer}>
          <h1>JOIN OUR TEAM!</h1>
          <Link href = 'https://discord.gg/JdXtvNtA' target = "_blank"><button>I&#39;m Interested!</button></Link>
        </div>
      </div>
      
      
    </>
  );
}

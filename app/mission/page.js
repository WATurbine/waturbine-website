import Image from 'next/image';
import sustainIcon from '../../assets/sustainicon.png';
import engIcon from '../../assets/engicon.png';
import inspire from '../../assets/inspire.png';
import styles from '../../styles/mission.module.css';

export const metadata = {
  title: 'Our Mission',
  description: 'Our mission at WATurbine - driving sustainability, engineering outreach, and inspiring the next generation of engineers.',
};

export default function Mission() {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.missionMain}>
        <h1>OUR MISSION</h1>
      </div>
      <div className={styles.statement}>
        <div className={styles.flexDiv}>
          <div className={styles.wrapDiv}>
            <Image 
              className={styles.icons} 
              src={sustainIcon} 
              alt="sustainability icon"
              width={120}
              height={120}
            />
            <h2>Sustainability</h2>
            <p>
              Our primary goal is sustainability, devoting our efforts in bringing forth a mass 
              adoption of sustainable energy generation which allows areas that previously did not 
              have abundant access to electricity.
            </p>
          </div>
        </div>
        <div className={styles.flexDiv}>
          <div className={styles.wrapDiv}>
            <Image 
              className={styles.icons} 
              src={engIcon} 
              alt="engineering icon"
              width={120}
              height={120}
            />
            <h2>Engineering Outreach</h2>
            <p>
              We aim to showcase the potential for a brighter future through efficient engineering, 
              inspiring others to develop the same passion for sustainable engineering.
            </p>
          </div>
        </div>
        <div className={styles.flexDiv}>
          <div className={styles.wrapDiv}>
            <Image 
              className={styles.icons} 
              src={inspire} 
              alt="inspire icon"
              width={120}
              height={120}
            />
            <h2>Inspire</h2>
            <p>
              Through our project, we aim to inspire the next generation of engineers passionate 
              to develop technology that helps others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

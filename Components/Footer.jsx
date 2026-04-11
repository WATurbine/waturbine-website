'use client'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/footer.module.css'
import Link from 'next/link'
import logo from '../assets/logoColour.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForumIcon from '@mui/icons-material/Forum';
import { config } from '@/lib/config';

function Footer() {
  return (
    <div className = {styles.footermain}>
      <div className = {styles.container}>
        <div className = {styles.leftSide}>
          <Image className = {styles.image} src={logo} alt='WATurbine logo' width={120} height={42} />
        </div>
        <div className = {styles.rightSide}>
          <p className={styles.connectLabel}>Connect with us</p>
          <div className={styles.socialLinks}>
          <Link href = {config.social.instagram} target = '_blank' rel="noopener noreferrer"><InstagramIcon/></Link>
          <Link href = {config.social.linkedin} target = '_blank' rel="noopener noreferrer"><LinkedInIcon/></Link>
          <Link href = {config.social.discord} target = '_blank' rel="noopener noreferrer"><ForumIcon/></Link>
          </div>
        </div>
        <p className={styles.copyright}>© 2026, WATurbine</p>
      </div>
    </div>
  )
}

export default Footer

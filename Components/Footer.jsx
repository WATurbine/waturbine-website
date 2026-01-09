'use client'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/footer.module.css'
import Link from 'next/link'
import logo from '../assets/logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { config } from '@/lib/config';

function Footer() {
  return (
    <div className = {styles.footermain}>
      <div className = {styles.container}>
        <div className = {styles.rightSide}>
            <Link href = '/'>
              <Image className = {styles.image} src={logo} alt='WATurbine logo' width={100} height={35} />
            </Link>
            <div className = {styles.linkBox}>
            <Link href = '/'>
                <p>Home</p>
            </Link>
            <Link href = '/mission'>
                <p>Our mission</p>
            </Link>
            <Link href = '/subteams'>
                <p>Subteams</p>
            </Link>
            </div>
        </div>
        <div className = {styles.leftSide}>
          <Link href = {config.social.instagram} target = '_blank' rel="noopener noreferrer"><InstagramIcon/></Link>
          <Link href = {`mailto:${config.social.email}`} target = '_blank' rel="noopener noreferrer"><EmailIcon/></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

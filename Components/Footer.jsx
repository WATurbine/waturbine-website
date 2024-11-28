import React from 'react'
import styles from '../styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className = {styles.footermain}>
      <div className = {styles.container}>
        <div className = {styles.rightSide}>
            <Link href = '/'>
                <Image className = {styles.image} priority src = {logo} alt = '/'/>
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
          <Link href = "https://www.instagram.com/uwwaturbine" target = '_blank'><InstagramIcon/></Link>
          <Link href = "mailto:admin@waturbine.ca" target = '_blank'><EmailIcon/></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

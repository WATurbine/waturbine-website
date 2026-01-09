'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.png'
import styles from '../styles/nav.module.css'
import ReorderIcon from '@mui/icons-material/Reorder'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { config } from '@/lib/config';

function Navbar() {
  const [openLinks, setLinks] = useState(false)

  const toggleNav = () => {
    setLinks(!openLinks);
  }
  return (
    <nav className = {styles.primarywrapper} id = {openLinks ? styles.open : styles.close}>
      <div className = {styles.mobilenav} onClick={toggleNav}>
           <Link href = '/'>
             <Image className = {styles.image} src={logo} alt='WATurbine logo' width={120} height={40} priority />
           </Link>
        <Link href = '/'>
              <p>HOME</p>
        </Link>
        <Link href = '/mission'>
              <p>OUR MISSION</p>
        </Link> 
        <Link href = '/subteams'>                      
              <p>SUBTEAMS</p>
        </Link>
        <div className = {styles.socials}>
          <Link href = {config.social.instagram} target = '_blank' rel="noopener noreferrer"><InstagramIcon/></Link>
          <Link href = {`mailto:${config.social.email}`} target = '_blank' rel="noopener noreferrer"><EmailIcon/></Link>
        </div>  
      </div>
      <div className = {styles.desktopnav}>
        <div className = {styles.navButtonContainer}>
            <Link href = '/'>
                <button>HOME</button>
            </Link>
            <Link href = '/mission'>
                <button>OUR MISSION</button>
            </Link>
            <Link href = '/subteams'>
                <button>SUBTEAMS</button>
            </Link> 
            <Link href = {config.social.discord} target = "_blank" rel="noopener noreferrer">
                <button>JOIN!</button>
            </Link> 
            <Link href = {config.external.sponsorshipPdf} target = "_blank" rel="noopener noreferrer">
                <button>SPONSORSHIP</button>
            </Link>
        </div>
        <div className = {styles.third} id = {styles.mobileButton} >
              <button onClick = {toggleNav}><ReorderIcon/></button>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
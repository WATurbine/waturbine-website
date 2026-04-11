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

// Keep top-level navigation labels in one place so desktop/mobile menus stay in sync.
const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/who-we-are', label: 'WHO WE ARE' },
  { href: '/sponsors', label: 'SPONSORS' },
  { href: '/getinvolved', label: 'GET INVOLVED' },
  { href: '/contact', label: 'CONTACT US' },
];

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
        {navLinks.map((item) => (
          <Link key={item.href} href={item.href}>
            <p>{item.label}</p>
          </Link>
        ))}
        <div className = {styles.socials}>
          <Link href = {config.social.instagram} target = '_blank' rel="noopener noreferrer"><InstagramIcon/></Link>
          <Link href = {`mailto:${config.social.email}`} target = '_blank' rel="noopener noreferrer"><EmailIcon/></Link>
        </div>  
      </div>
      <div className = {styles.desktopnav}>
        <div className = {styles.navButtonContainer}>
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              <button>{item.label}</button>
            </Link>
          ))}
        </div>
        <div className = {styles.third} id = {styles.mobileButton} >
              <button onClick = {toggleNav}><ReorderIcon/></button>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
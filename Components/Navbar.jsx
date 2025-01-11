import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.png'
import styles from '../styles/nav.module.css'
import ReorderIcon from '@mui/icons-material/Reorder'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function Navbar() {
  const [openLinks, setLinks] = useState(false)

  const toggleNav = () => {
    setLinks(!openLinks);
  }
  return (
    <nav className = {styles.primarywrapper} id = {openLinks ? styles.open : styles.close}>
      <div className = {styles.mobilenav} onClick={toggleNav}>
        <Link href = '/'>
             <Image className = {styles.image} priority src = {logo} alt = '/'/>
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
          <Link href = "https://www.instagram.com/uwwaturbine/" target = '_blank'><InstagramIcon/></Link>
          <Link href = "mailto:admin@waturbine.ca" target = '_blank'><EmailIcon/></Link>
        </div>  
      </div>
      <div className = {styles.desktopnav}>
        <div className = {styles.third} id = {styles.navlinks}>
            <Link href = '/'>
                <p>HOME</p>
            </Link>
            <Link href = '/mission'>
                <p>OUR MISSION</p>
            </Link>
            <Link href = '/subteams'>
                <p>SUBTEAMS</p>
            </Link> 
        </div>
        <div className = {styles.third}>
        <Link href = '/'>
             <Image className = {styles.image} priority src = {logo} alt = '/'/>
        </Link>
        </div>
        <div className = {styles.third} id = {styles.contactButton}> 
          <Link href = 'https://discord.gg/QJhDqWywaP' target = "_blank">
                <button>JOIN!</button>
          </Link> 
          <a href = '/Waturbine_Sponsorship.pdf' target = "_blank">
                <button>SPONSORSHIP</button>
          </a>
        </div>
        <div className = {styles.third} id = {styles.mobileButton} >
              <button onClick = {toggleNav}><ReorderIcon/></button>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
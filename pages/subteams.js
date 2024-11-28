import React from 'react'

import styles from '../styles/subteams.module.css'

function subteams() {
  return (
    <div className = {styles.mainWrap}>
      <div className = {styles.subMain}>
        <h1>SUBTEAMS</h1>
      </div>
      <div className = {styles.subSecond}>
        <h2>Take a look at our team overview:</h2>
        <iframe
        className = {styles.pdf}
        src="/Waturbine.pdf"
        style={{ border: 'none' }}
      ></iframe>
      </div>
      
    </div>
  )
}

export default subteams

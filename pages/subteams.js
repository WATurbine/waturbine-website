import React from 'react'
import Head from "next/head";
import styles from '../styles/subteams.module.css'

function subteams() {
  return (
    <>
    <Head>
        <title>WATURBINE - Subteams</title>
        <meta name="description" content="Discover the subteams for WATurbine" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className = {styles.mainWrap}>
      <div className = {styles.subMain}>
        <h1>SUBTEAMS</h1>
      </div>
      <div className = {styles.subSecond}>
        <h2>Take a look at our team overview:</h2>
        <iframe
        className = {styles.pdf}
        src="/WATurbine_first.pdf"
        style={{ border: 'none' }}
      ></iframe>
      </div>
      
    </div>
    </>
  )
}

export default subteams

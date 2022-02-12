import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

export default function Home() {

  // initial data
  const [state, setState] = useState([
    {
      answer: 'Electricity is measured in units called watts',
      clicked: false,
      correct: false
    },
    {
      answer: 'Electricity flows at the speed of light',
      clicked: false,
      correct: false
    },
    {
      answer: 'Electricity is a primary energy source',
      clicked: false,
      correct: true
    }
  ])
  
  return (
    <div className={styles.container}>
      

      <main className={styles.main}>
          
      </main>
    </div>
  )
}

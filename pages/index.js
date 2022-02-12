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

  const [maincss, setMaincss] = useState('')

  const refresh = () => {
    window.location.reload(false)
  }


  // Some issues when user click on different answer, the radio button will highlight all the clicked
  const toggleClick = (e) => {
    
    setState([...state].map(data => {
      if (data.answer === e.target.value) {
        if (data.correct) {
         
          setMaincss('mainfadeout')
          console.log(maincss)
          setTimeout(refresh, 1800)
        }
        return {
          ...data,
          clicked: !data.clicked
        }
      } else {
        return data
      }
    }))

  }

  return (
    <div className={styles.container}>
      

      <main className={styles.main}>
        <div className={maincss == '' ? styles.maincss : styles.mainfadeout}>
          <h2>Which of the below statements about electricity is not true?</h2>

            {state.map((a, index) => {
              return (
                <div key={index} className={styles.answer}>
                  <label>{a.answer}
                    <input type="radio" id="radio" name="answer" onClick={toggleClick} className={a.clicked ? styles.clickedcheckmark : styles.checkmark} value={a.answer}/>
                  </label>
                </div>
              )
            })}
          </div>
      </main>
    </div>
  )
}

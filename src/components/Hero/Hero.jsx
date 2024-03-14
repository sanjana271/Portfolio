import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>{/*left part info and right part we have image */}
        <div className={styles.content}>
            <h1 className={styles.title}>Hii, I'm Sanjana</h1>
            <p className={styles.decription}>
                I am a Softwere Engineer and Web Devloper, hit the Contact Me to learn more!
            </p>
            <a href="mailto:mynameissanju271@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/homepage.png")} alt="img of me" className={styles.heroimg}/>
        <div className={styles.topBlurr}/>
        <div className={styles.bottomBlurr}/>
    </section>
  )
}

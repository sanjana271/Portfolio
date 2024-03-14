import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="About">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="me with laptop img" className={styles.aboutImage}/>

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}> 
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor Icon" />
                        <div className={styles.itemsText}>
                            <h3>Web Developer</h3>
                            <p>I am a web developer who likes to Creating seamless and dynamic websites to enhance online presence and user engagement</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server Icon" />
                        <div className={styles.itemsText}>
                            <h3>Software Engineer</h3>
                            <p>Passionate about Data Structure and Algorithms to solve problems and drive innovation in software development</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="ui Icon" />
                        <div className={styles.itemsText}>
                            <h3>Tech Enthusiast</h3>
                            <p>Proficient in fundamental topics and latest Cutting edge Technology</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}


import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id='Contacts' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:mynameissanju271@gmail.com">mynameissanju271@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin Icon" />
                    <a href="https://in.linkedin.com/in/sanjanaalam" target='_blank'>linkedin.com/in/sanjanaalam</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                    <a href="https://github.com/sanjana271" target='_blank'>github.com/sanjana271</a>
                </li>
            </ul>
            <div className={styles.love}>Made with ❤️</div>
        </footer>
    )
}

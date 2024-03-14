import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';


export const Navbar=()=> {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>{/* / take us to home page again */}
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    alt='menu-btn'
                    onClick={() => setMenuOpen(!menuOpen)} />{/* / if menu is open then close it else open it vala icon and same for function onclick it changes from false to true and vice versa*/}
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)} > {/*menuopen is true then style will be apply and whenever we click on something like contats we want to close the menuopen so can direct to that page*/ }
                    <li>
                        <a href="#About">About</a>
                    </li>
                    <li>
                        <a href="#Education">Education & Skills</a>
                    </li>
                    <li>
                        <a href="#Projects">Projects</a>
                    </li>
                    <li>
                        <a href="#Contacts">Contact</a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}



import React from 'react'
import styles from "./Education.module.css";
import { getImageUrl } from '../../utils';
import skills from '../../data/skills.json';
import education from '../../data/education.json';

export const Education = () => {
    return (
        <section id='Education' className={styles.container}>
            <h2 className={styles.title}>Education & Skills</h2>
            <div className={styles.content}>

                <ul className={styles.education}>
                    {
                        education.map((educationItem, id) => {
                            return <li key={id} className={styles.educationItem}>
                                <img src={getImageUrl(educationItem.imageSrc)} alt={educationItem.major} />
                                <div className={styles.educationItemDetails}>
                                    <h3>{`${educationItem.major}`}</h3>
                                    <h3>{educationItem.college}</h3>
                                    <p>{`${educationItem.startDate}-${educationItem.endDate}`}</p>
                                    <p>{`Percentage -  ${educationItem.Percentage}`}</p>
                                </div>
                            </li>
                        })
                    }
                </ul>

                <div className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImgContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skills.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    })
                }
                </div>
            </div>

        </section>
    )
}


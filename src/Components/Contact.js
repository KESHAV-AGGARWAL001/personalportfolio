import React from 'react'
import twitter from '../Images/twitter.png'
import LinkedIn from '../Images/linkedin.png'
import GitHub from '../Images/github.png'
import Instagram from '../Images/instagram.png'
import styles from './Ranges.module.css'
const Contact = () => {
    return (
        <div>
            <div>
                <h2 style={{ margin: "17vh 0vh 10vh 0vh", color: "red", display: "flex", justifyContent: "center", fontWeight: "bold", textDecorationLine: "underline" }} >Contact Me!!</h2>
            </div>
            <h5 style={{ color: "red", margin: "auto 10vw " }}>Feel Free to contact me through my social media handles</h5>
            <div className={styles.social_media}>
                <a target='_blank' href='https://github.com/KESHAV-AGGARWAL001' ><img src={GitHub} className={styles.image} /> </a>
                <a target='_blank' href='https://www.linkedin.com/in/keshavmittal11122003/' ><img src={LinkedIn} className={styles.image} /></a>
                <a target='_blank' href='https://www.instagram.com/itz_keshav_aggarwal_' ><img src={Instagram} className={styles.image} /></a>
                <a target='_blank' href='https://twitter.com/KeshavA12038483' ><img src={twitter} className={styles.image} /></a>
            </div>
        </div>
    )
}

export default Contact

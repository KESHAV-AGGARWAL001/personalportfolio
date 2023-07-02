import React from 'react'
import img1 from '../Images/profile.png'
import styles from './Ranges.module.css';
const Main = () => {
    return (
        <>
            <div style={{ background: "transparent" }}>
                <img src={img1} alt='My photo' className={styles.main} />
            </div>

            <div>
                <h5 style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>Hi, I'm  </h5>
                <h2 style={{ textAlign: "center", color: "white", fontWeight: "bolder" }}>Keshav Aggarwal  </h2>
                <h6 style={{ textAlign: "center", color: "red", fontWeight: "bold", width: "50vw", margin: "3vh auto 2vh auto" }}>A Web Developer skilled in Front-end Development with technologies like javascript , React js , Redux , Cpp and many more...  </h6>
            </div>

        </>
    )
}

export default Main

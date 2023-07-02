import React from 'react'
import styles from './Ranges.module.css'
const Education = () => {
    return (
        <div>
            <h2 style={{ margin: "17vh 0vh 10vh 0vh", color: "red", display: "flex", justifyContent: "center", fontWeight: "bold", textDecorationLine: "underline" }} >Education</h2>

            <div className={styles.flexbox}>
                <div>
                    <h6 style={{ color: "white" }}>Bachelors in Computer Science and Engineering </h6>
                    <h3 style={{ color: "red" }}>NIT Hamirpur , Himachal Pradesh</h3>
                </div>
                <div>
                    <h6 style={{ color: "white" }}>Higher Secondary </h6>
                    <h3 style={{ color: "red" }}>Good Day Defence School, Hanumangarh</h3>
                </div>
                <div>
                    <h6 style={{ color: "white" }}>Secondary </h6>
                    <h3 style={{ color: "red" }}>Mother's Pride Secondary School , Sangaria</h3>
                </div>
            </div>
        </div>
    )
}

export default Education

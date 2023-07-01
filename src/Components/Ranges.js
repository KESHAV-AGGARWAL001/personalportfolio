import React from 'react';
import styles from './Ranges.module.css';
const Ranges = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 className={styles.h2design} >Skills</h2>
            <div className={styles.container} >
                <div className={styles.dvi}>
                    <h3 className={styles.h3style} >JavaScript</h3>
                    <div className={styles.dv}>
                        <div className={styles.dvinner}></div>
                        <div className={styles.dvtwoinner}></div>
                    </div>
                </div>
                <div className={styles.dvi}>
                    <h3 className={styles.h3style} >Cpp</h3>
                    <div className={styles.dv}>
                        <div className={styles.dvinner}></div>
                        <div className={styles.dvtwoinner}></div>
                    </div>
                </div>
                <div className={styles.dvi}>
                    <h3 className={styles.h3style} >HTML</h3>
                    <div className={styles.dv}>
                        <div className={styles.dvinner}></div>
                        <div className={styles.dvtwoinner}></div>
                    </div>
                </div>
                <div className={styles.dvi}>
                    <h3 className={styles.h3style} >CSS</h3>
                    <div className={styles.dv}>
                        <div className={styles.dvinner}></div>
                        <div className={styles.dvtwoinner}></div>
                    </div>
                </div>
                <div className={styles.dvi}>
                    <h3 className={styles.h3style} >Reactjs</h3>
                    <div className={styles.dv}>
                        <div className={styles.dvinner}></div>
                        <div className={styles.dvtwoinner}></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ranges

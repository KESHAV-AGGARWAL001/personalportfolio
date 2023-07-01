import React, { useEffect, useState } from 'react'
import img1 from '../Images/OIP.jpg';
const Loader = () => {

    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const myLine = "Unlocking creativity... Loading your Web Portfolio"

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < myLine.length) {
                setIndex(index + 1);
                setText(myLine.slice(0, index + 1));
                console.log(myLine.slice(0, index + 1));
            }
            else { clearInterval(interval); }
        }, 100);

        return () => {
            clearInterval(interval);
        };

    }, [index]);


    return (
        <div style={{ backgroundColor: "black", width: "100vw", height: "100vh" }}>
            <div style={{ margin: "auto", display: 'flex', flexDirection: "column", paddingTop: "20rem", justifyContent: "center", paddingBottom: "auto" }}>
                <img src={img1} alt='Keshav Aggarwal' style={{ margin: "auto", border: "5px solid white ", borderRadius: "100%", justifyContent: "center", display: "flex", alignContent: "center", width: "10rem", height: "10rem" }}>
                </img>
                <h3 style={{ marginInline: "auto", color: '#2DF67E', marginTop: "2vh" }}>{text}</h3>
            </div>
        </div>
    )
}

export default Loader

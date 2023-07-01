import React from 'react'
import img1 from '../Images/personal.jpg';
const Header = () => {
    return (
        <div style={{ position: "fixed", top: 0, width: "100%" }}>
            <nav className="navbar " style={{ display: 'flex', flexDirection: "row", alignContent: "center", padding: "0.5vh 10vw", backdropFilter: "blur", zIndex: "0", background: "transparent" }}>
                <div>
                    <img src={img1} alt='Keshav Aggarwal' style={{ margin: "auto", border: "3px solid white ", borderRadius: "100%", justifyContent: "center", display: "flex", alignContent: "center", width: "7vh", height: "7vh" }}>
                    </img>
                </div>
                <div style={{ display: "flex", justifySelf: "center", alignSelf: "center", flexDirection: "column", background: "transparent" }}>
                    <h3 style={{ color: "red" }}>𝔎𝔢𝔰𝔥𝔞𝔳 𝔄𝔤𝔤𝔞𝔯𝔴𝔞𝔩 </h3>
                    <h6 style={{ color: "white", marginLeft: "7vw" }} >𝔄 𝔴𝔢𝔟 𝔡𝔢𝔳𝔢𝔩𝔬𝔭𝔢𝔯</h6>
                </div>
            </nav >
        </div>
    )
}

export default Header

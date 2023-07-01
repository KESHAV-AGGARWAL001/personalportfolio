import React from 'react'
const Background = () => {
    return (
        <>
            <div>
                <video style={{ objectFit: "cover", width: "100vw", height: "100vh", zIndex: "-1", position: "fixed", top: 0, left: 0 }} autoPlay muted loop>
                    <source src={require('./backgroundVideo.mp4')} type='video/mp4' />
                </video>
            </div>
        </>
    )
}

export default Background

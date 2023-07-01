import React from 'react'
import Header from './Components/Header'
import Background from './Background'
import Main from './Components/Main'
import Ranges from './Components/Ranges'

const ComponentRender = () => {
    return (
        <>
            <Background />
            <div style={{ background: "transparent" }}>
                <Header />
                <Main />
                <Ranges />
            </div>
        </>
    )
}

export default ComponentRender

import React from 'react'
import Header from './Components/Header'
import Background from './Background'
import Main from './Components/Main'
import Ranges from './Components/Ranges'
import Projects from './Components/Projects'
import Education from './Components/Education'
import Contact from './Components/Contact'

const ComponentRender = () => {
    return (
        <>
            <Background />
            <div style={{ background: "transparent" }}>
                <Header />
                <Main />
                <Projects />
                <Ranges />
                <Education />
                <Contact />
            </div>
        </>
    )
}

export default ComponentRender

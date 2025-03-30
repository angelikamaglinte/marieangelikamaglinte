import React from 'react'
import './About.css'
import Header from '../../components/Header/Header'
import AboutMe from '../../components/AboutMe/AboutMe'
import Expertise from '../../components/Expertise/Expertise'

const About = () => {
    return (
        <div className='about-container'>
            {/* header */}
            <Header
                mainTitle="ABOUT ME"
                leftText="Based in Calgary, AB, Canada"
                centerText="(@2025)"
                rightText="Scroll Down"
            />

            {/* about me */}
            <AboutMe />

            {/* expertise */}
            <Expertise />
        </div>
    )
}

export default About

import React, { useState } from 'react'
import './Home.css'
import Hero from '../../components/Home/Hero'
import LocationAndTitle from '../../components/LocationAndTitle/LocationAndTitle'
import AboutMe from '../../components/AboutMe/AboutMe'
import Expertise from '../../components/Expertise/Expertise'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import Portfolio from '../../components/Portfolio/Portfolio'
import { Link } from 'react-router-dom'
import { LuArrowUpRight } from 'react-icons/lu';
import CursorTracker from '../../components/CursorTracker/CursorTracker'

const Home = () => {
    const [hoveringCard, setHoveringCard] = useState(false);

    return (
        <div className='home-container'>
            <Hero />
            <LocationAndTitle />
            <AboutMe />
            <Expertise />

            <SectionHeader
                category="(Portfolio)"
                title="Selected Work"
                number="03"
                subtitle="©2023 - 2025"
                iconSize={80}
                description="Here, you'll find a collection of my best work in web design, branding, animation, and more. Each project reflects my passion for creativity and innovation."
            />

            {/* Show "View Project" if user is hovering on a ProjectCard */}
            <CursorTracker showLabel={hoveringCard} />

            <Portfolio setHoveringCard={setHoveringCard} />

            {/* view all projects */}
            <div className='view-all-projects-btn-container'>
                <Link to='/portfolio' className='view-all-projects-btn-link'>
                    <button className='view-all-projects-btn'>
                        <span>VIEW ALL PROJECTS</span>
                        <LuArrowUpRight className="view-all-projects-arrow-icon" />
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Home

import React, { useState } from 'react'
import './Portfolio.css'
import Header from '../../components/Header/Header'
import PortfolioSection from '../../components/Portfolio/PortfolioSection'
import ContactSection from '../../components/ContactSection/ContactSection'
import CursorTracker from '../../components/CursorTracker/CursorTracker'

const Portfolio = () => {
    const [hoveringCard, setHoveringCard] = useState(false);

    return (
        <div className="portfolio-container">
            {/* header */}
            <Header
                mainTitle="SELECTED WORK"
                leftText="Design and Development"
                centerText="(@2023-2025)"
                rightText="Scroll Down"
            />

            {/* show "View Project" if user is hovering on a project card - custom cursor */}
            <CursorTracker showLabel={hoveringCard} />

            {/* portfolio - list of all projects */}
            <PortfolioSection setHoveringCard={setHoveringCard} />

            {/* contact section */}
            <ContactSection />
        </div>
    )
}

export default Portfolio

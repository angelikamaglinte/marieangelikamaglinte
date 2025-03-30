import React from 'react'
import './Portfolio.css'
import Header from '../../components/Header/Header'
import PortfolioSection from '../../components/Portfolio/PortfolioSection'
import ContactSection from '../../components/ContactSection/ContactSection'

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            {/* header */}
            <Header
                mainTitle="SELECTED WORK"
                leftText="Design and Development"
                centerText="(@2023-2025)"
                rightText="Scroll Down"
            />

            {/* portfolio - list of all projects */}
            <PortfolioSection />

            {/* contact section */}
            <ContactSection />
        </div>
    )
}

export default Portfolio

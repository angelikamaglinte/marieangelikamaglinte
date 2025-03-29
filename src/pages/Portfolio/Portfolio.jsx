import React from 'react'
import './Portfolio.css'
import Header from '../../components/Header/Header'

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <Header
                mainTitle="SELECTED WORK"
                leftText="Design and Development"
                centerText="(@2023-2025)"
                rightText="Scroll Down"
            />
        </div>
    )
}

export default Portfolio

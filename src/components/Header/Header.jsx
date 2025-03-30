import React from 'react'
import './Header.css'
import assets from '../../assets'
import { ArrowDownRight } from 'lucide-react'

const Header = ({ mainTitle, leftText, centerText, rightText }) => {
    return (
        <div className="heading-container">
            {/* main title */}
            <h2 className="heading-main-title">{mainTitle}</h2>

            {/* subtext row */}
            <div className="heading-subtext">
                <p className="heading-left">{leftText}</p>
                <p className="heading-center">{centerText}</p>
                <p className="heading-right">{rightText} <ArrowDownRight size={20} style={{ verticalAlign: "bottom" }} className="scroll-icon" /></p>
            </div>

            {/* mockup feature */}
            <img src={assets.mockup_feature} className="mockup-feature" alt="Mockup Image" />
        </div>
    )
}

export default Header

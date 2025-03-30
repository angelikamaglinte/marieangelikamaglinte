import React, { useState } from "react";
import "./Services.css";
import Header from "../../components/Header/Header";
import Expertise from "../../components/Expertise/Expertise";
import PortfolioSection from "../../components/Portfolio/PortfolioSection";
import CursorTracker from "../../components/CursorTracker/CursorTracker";
import { Link } from "react-router-dom";
import { LuArrowUpRight } from 'react-icons/lu';

const Services = () => {
    const [hoveringCard, setHoveringCard] = useState(false);

    return (
        <div className="services-container">
            {/* Header */}
            <Header
                mainTitle="SERVICES & CAPABILITIES"
                leftText="7 years of experience"
                centerText="(@2025)"
                rightText="Scroll Down"
            />

            {/* expertise */}
            <Expertise />

            {/* show "View Project" if user is hovering on a project card - custom cursor */}
            <CursorTracker showLabel={hoveringCard} />

            {/* portfolio */}
            <PortfolioSection setHoveringCard={setHoveringCard} limit={1} />

            {/* view all projects - redirect to portfolio */}
            <div className='view-all-projects-btn-container'>
                <Link to='/portfolio' className='view-all-projects-btn-link'>
                    <button className='view-all-projects-btn'>
                        <span>VIEW ALL PROJECTS</span>
                        <LuArrowUpRight className="view-all-projects-arrow-icon" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Services;

import React from 'react';
import './SectionHeader.css';
import { ArrowDown } from 'lucide-react';

const SectionHeader = ({ category, title, number, subtitle, iconSize=80, description }) => {
    return (
        <div className="section-header-container">
            <div className="section-header-top">
                <p className="section-header-category">{category}</p>
                <p className="section-header-number">{number}</p>
            </div>
            <h2 className="section-header-title">{title}</h2>
            {subtitle && <p className="section-header-subtitle">{subtitle}</p>}
            <div className="section-header-bottom">
                <div className="section-header-icon">
                    <ArrowDown size={iconSize} className="arrow-icon" />
                </div>
                <p className="section-header-description">{description}</p>
            </div>
        </div>
    );
}

export default SectionHeader;

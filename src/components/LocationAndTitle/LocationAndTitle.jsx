import React from 'react'
import './LocationAndTitle.css'
import { ArrowDownRight } from "lucide-react";

const LocationAndTitle = () => {
    return (
        <div className='location-job-container'>
            {/* location & job title */}
            <div className='location-job-content'>
                <div className='location-year'>
                    <p className='location-text'>Based in Calgary, AB, Canada</p>
                    {/* <p className='year-text'>@2025</p> */}
                    <div className="scroll-text-container">
                        <p className='scroll-text'>Scroll down <ArrowDownRight size={20} style={{ verticalAlign: "bottom" }} className="scroll-icon"  /></p>
                    </div>
                </div>
                <p className='job-title-text'>FULL STACK DEV</p>
            </div>
        </div>
    )
}

export default LocationAndTitle

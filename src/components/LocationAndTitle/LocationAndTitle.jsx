import React from 'react'
import './LocationAndTitle.css'

const LocationAndTitle = () => {
    return (
        <div className='location-job-container'>
            {/* location & job title */}
            <div className='location-job-content'>
                <div className='location-year'>
                    <p className='location-text'>Based in Calgary, AB, Canada</p>
                    {/* <p className='year-text'>@2025</p> */}
                    <p className='scroll-text'>Scroll down</p>
                </div>
                <p className='job-title-text'>FULL STACK DEV</p>
            </div>
        </div>
    )
}

export default LocationAndTitle

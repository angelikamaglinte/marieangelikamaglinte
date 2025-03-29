import React from 'react'
import './Hero.css'
import assets from '../../assets'
import LocationAndTitle from '../../components/LocationAndTitle/LocationAndTitle'

const Hero = () => {
    return (
        <div className='home-hero-container'>
            <div className='home-hero-content'>
                <p className='hero-text'>I create</p>
                <div className='hero-heading'>
                    <p className='hero-title'>sites</p>
                    <p className='hero-subtext'>that help you get more<br /> applications for your business</p>
                </div>
            </div>
            <div className='hero-image'>
                <img src={assets.hero_mockup} alt="Macbook Pro showing a website" />
            </div>
        </div>
        
    )
}

export default Hero

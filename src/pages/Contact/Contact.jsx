import React from 'react'
import './Contact.css'
import Header from '../../components/Header/Header'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <Header
                    mainTitle="Let's Work Together"
                    leftText="Based in Calgary, AB, Canada"
                    centerText="(@2025)"
                    rightText="Scroll Down"
                />
            </div>
        </div>
    )
}

export default Contact

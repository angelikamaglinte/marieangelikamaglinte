import React from "react";
import "./ContactSection.css";
import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";

const ContactSection = () => {
    return (
        <div className="contact-section-container">
            <div className="contact-section-content">
                {/* Contact Title with continuous marquee */}
                <div className="contact-title">
                    <div className="marquee">
                        <span className="marquee-text">CONTACT ME</span><span className="marquee-text">CONTACT ME</span><span className="marquee-text">CONTACT ME</span>
                    </div>

                </div>

                {/* Contact Description */}
                <div className="contact-description">
                    <p>
                        Let’s turn your vision into reality! Whether you need a stunning website,
                        eye-catching graphics, or engaging animations, our creative team is here
                        to bring your ideas to life. Contact us today, and let’s start a conversation
                        about your next project.
                    </p>

                    {/* Contact Button */}
                    <div className='contact-me-btn-container'>
                        <Link to='/contact' className='contact-me-btn-link'>
                            <button className='contact-me-btn'>
                                <span>CONTACT ME</span>
                                <LuArrowUpRight className="contact-me-btn-arrow-icon" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;

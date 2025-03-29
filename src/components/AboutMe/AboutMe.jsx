// // {/* Marquee effect */}
// // <div className="marquee-container">
// // <motion.div
// //     className="marquee"
// //     animate={{ x: ["100%", "-100%"] }} // Moves from right to left
// //     transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
// // >
// //     About Me
// // </motion.div>
// // </div>

import React from 'react';
import './AboutMe.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import assets from '../../assets';
import { LuArrowUpRight } from 'react-icons/lu';

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="about-me-content">
                {/* left side (text content) */}
                <div className="about-me-text">
                    {/* top section - "MY STORY" & "01" */}
                    <div className="about-me-header">
                        <p className="story-text">(MY STORY)</p>
                        <p className="story-number">01</p>
                    </div>
                    {/* heading - "ABOUT ME" */}
                    <div className="about-me-title">
                        <motion.div
                            className="marquee-text"
                            initial={{ x: "100%" }}     // start from the right edge
                            animate={{ x: "-100%" }}    // move all the way to the left
                            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                        >
                            ABOUT ME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ABOUT ME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ABOUT ME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ABOUT ME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ABOUT ME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </motion.div>
                    </div>

                    {/* about me details */}
                    <div className="about-me-description">
                        <p>
                            I’m a full-stack developer passionate about building modern high-performance web applications. With expertise in the MERN stack, TypeScript, and Next.js, I specialize in creating seamless digital experiences that are both scalable and efficient. On the frontend, I craft responsive, intuitive user interfaces that enhance usability and engagement. On the backend, I develop robust APIs, optimize databases, and implement secure authentication using tools like Firebase, Supabase, and JWT. I have experience deploying and managing applications in cloud environments, ensuring they run smoothly and efficiently. I’m committed to writing clean, maintainable code and delivering solutions that align both business and user needs. Let’s bring your ideas to life with modern technologies and thoughtful design.
                        </p>
                    </div>
                </div>

                {/* right side (image) */}
                <div className="about-me-image">
                    <img src={assets.about_me_img} alt="About Me" />
                </div>
            </div>

            {/* more about me button */}
            <div className="about-me-button">
                <Link className='more-about-me-btn' to="/about">
                    <button>
                        MORE ABOUT ME
                        <LuArrowUpRight className="more-about-me-arrow-icon" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AboutMe

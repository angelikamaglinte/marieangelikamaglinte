import React from "react";
import { LuArrowUp } from "react-icons/lu";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram, FaBehance, FaDribbble } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-top-row">
                <div className="footer-left-col">
                    <a href="#" className="scroll-top">
                        <LuArrowUp className="footer-arrow-icon" style={{ fontSize: "5rem", color: "white" }} />
                    </a>
                </div>

                <div className="footer-right-columns">
                    <div className="footer-column">
                        <p><FaLinkedin /> LinkedIn</p>
                        <p><FaGithub /> GitHub</p>
                        <p><FaInstagram /> Instagram</p>
                    </div>
                    <div className="footer-column">
                        <p><FaBehance /> BeBehance</p>
                        <p><FaDribbble /> Dribbble</p>
                    </div>
                </div>
            </div>

            <h2 className="footer-title">FULL-STACK<br /> DEVELOPER</h2>
        </footer>
    );
};

export default Footer;

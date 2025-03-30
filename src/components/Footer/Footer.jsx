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
                        <p className="socials"><FaLinkedin style={{ verticalAlign: "middle" }} /> LinkedIn</p>
                        <p className="socials"><FaGithub style={{ verticalAlign: "middle" }} /> GitHub</p>
                        <p className="socials"><FaInstagram style={{ verticalAlign: "middle" }} /> Instagram</p>
                    </div>
                    <div className="footer-column">
                        <p className="socials"><FaBehance style={{ verticalAlign: "middle" }} /> BeBehance</p>
                        <p className="socials"><FaDribbble style={{ verticalAlign: "middle" }} /> Dribbble</p>
                    </div>
                </div>
            </div>

            <h2 className="footer-title">FULL-STACK<br /> DEVELOPER</h2>
        </footer>
    );
};

export default Footer;

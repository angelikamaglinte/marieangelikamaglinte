import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import assets from "../../assets";
import { motion } from "framer-motion";

const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Stagger effect for the LI items
        },
    },
};

const DURATION = 0.25;
const STAGGER = 0.025;

/** 
 * note:
 * FlipLink 
 * - this splits text into letters
 * - this uses two layers of letters:
 *    1) top layer slides from 0 to -100%
 *    2) bottom layer slides from 100% to 0
 * - this wraps it all in a NavLink (React Router) so it behaves like a normal link.
 */
function FlipLink({ text, to, onClick, isActive }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={onClick}
            style={{ textDecoration: "none" }}
        >
            <motion.span
                initial="initial"
                whileHover="hovered"
                whileTap="hovered"
                className="flip-link"
                style={{
                    position: "relative",
                    display: "inline-block",
                    overflow: "hidden",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#000",
                }}
            >
                {/* top layer */}
                <div>
                    {text.split("").map((char, i) => (
                        <motion.span
                            key={`top-${i}`}
                            variants={{
                                initial: { y: "0%" },
                                hovered: { y: "-100%" },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,
                            }}
                            style={{ display: "inline-block" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* bottom layer */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                >
                    {text.split("").map((char, i) => (
                        <motion.span
                            key={`bot-${i}`}
                            variants={{
                                initial: { y: "100%" },
                                hovered: { y: "0%" },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,
                            }}
                            style={{ display: "inline-block" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </motion.span>
        </NavLink>
    );
}

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar-wrapper">
            <div className="navbar">
                {/* logo */}
                <div className="navbar-logo">
                    <NavLink to="/">
                        <img src={assets.am_logo} alt="Logo" />
                    </NavLink>
                </div>

                {/* navigation links with motion */}
                <motion.ul
                    className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}
                    initial="hidden"
                    animate="visible"
                    variants={menuVariants}
                >
                    {["Home", "About", "Services", "Portfolio", "Contact"].map(
                        (text, index) => (
                            <motion.li key={index}>
                                <FlipLink
                                    text={text}
                                    to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                />
                            </motion.li>
                        )
                    )}
                </motion.ul>

                {/* mobile menu icon */}
                <div className="mobile-menu-icon" onClick={handleToggleMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            <hr />
        </nav>
    );
}

export default Navbar;

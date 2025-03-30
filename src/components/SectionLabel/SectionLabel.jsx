import React from 'react'
import './SectionLabel.css'
import { motion } from "framer-motion";

const SectionLabel = ({ leftText, rightText, title }) => {
    return (
        <div className="section-label-container">
            <div className="section-label-content">
                <div className="section-label-heading">
                    <p className="section-label-left">{leftText}</p>
                    <p className="section-label-right">{rightText}</p>
                </div>
                {/* <h2 className="label-title">{title}</h2> */}
                <motion.h2
                    className="label-title"
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "linear",
                    }}
                >
                    {title}
                </motion.h2>
            </div>

        </div>
    );
};

export default SectionLabel

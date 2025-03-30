import React from "react";
import "./SectionLabel.css";
import { motion } from "framer-motion";

const SectionLabel = ({ leftText, rightText, title }) => {
    return (
        <div className="section-label-container">
            <div className="section-label-content">
                <div className="section-label-heading">
                    <p className="section-label-left">{leftText}</p>
                    <p className="section-label-right">{rightText}</p>
                </div>

                <div className="marquee-wrapper">
                    <motion.div
                        className="marquee-content"
                        initial={{ x: "0%" }}
                        animate={{ x: "-200%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                        }}
                    >
                        <h2 className="label-title">{title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {title}  </h2>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SectionLabel;

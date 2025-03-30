import React from 'react';
import './Expertise.css';
// import SectionLabel from '../SectionLabel/SectionLabel';

const Expertise = () => {
    return (
        <div className="expertise-container">
            <div className="expertise-content">
                {/* top header: (SERVICES) and 02 */}
                {/* <div className="expertise-header">
                    <p className="expertise-text">(SERVICES)</p>
                    <p className="expertise-number">02</p>
                </div> */}

                {/* main title: EXPERTISE */}
                {/* <h2 className="expertise-title">EXPERTISE</h2> */}

                

                {/* expertise list items */}
                <div className="expertise-list">

                    {/* item 1 */}
                    <div className="expertise-item">
                        <span className="expertise-item-number">01.</span>
                        <span className="expertise-item-heading">UI/UX &amp; Digital Design</span>
                        <p className="expertise-item-description custom-padding">
                            I design intuitive and visually appealing user experiences that keep people engaged.
                            Whether it’s a website, app, or digital interface, I focus on creating seamless and user-friendly designs.
                        </p>
                    </div>

                    {/* item 2 */}
                    <div className="expertise-item">
                        <span className="expertise-item-number">02.</span>
                        <span className="expertise-item-heading">Full-Stack Development</span>
                        <p className="expertise-item-description custom-padding">
                            I develop responsive, high-performance websites and web applications using the latest technologies.
                            From frontend to backend, I build solutions that are both functional and scalable.
                        </p>
                    </div>

                    {/* item 3 */}
                    <div className="expertise-item">
                        <span className="expertise-item-number">03.</span>
                        <span className="expertise-item-heading">Software Development</span>
                        <p className="expertise-item-description custom-padding">
                            I build robust software solutions, ensuring efficiency, scalability, and security.
                            With expertise in multiple programming languages and frameworks, I develop applications tailored to business needs.
                        </p>
                    </div>

                    {/* item 4 */}
                    <div className="expertise-item">
                        <span className="expertise-item-number">04.</span>
                        <span className="expertise-item-heading">Graphic &amp; Motion Design</span>
                        <p className="expertise-item-description custom-padding">
                            I design intuitive and visually appealing user experiences that keep people engaged.
                            Whether it’s a website, app, or digital interface, I focus on creating seamless and user-friendly designs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;

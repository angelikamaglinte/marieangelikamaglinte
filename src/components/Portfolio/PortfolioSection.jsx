import React from "react";
import './PortfolioSection.css'
import ProjectCard from "./ProjectCard";
import projects from "./Projects"; 

// const projects = [
//     {
//         year: 2025,
//         title: "GLUU",
//         tags: ["UI/UX Design", "Full-Stack Development", "Web Development", "Web Design"],
//         image: "gluu_mockup", // Reference key from assets.js
//     },
//     {
//         year: 2025,
//         title: "PLANTIFY APP",
//         tags: ["UI/UX Design", "Mobile App Design", "App Development", "Branding"],
//         image: "plantify_mockup",
//     },
//     {
//         year: 2024,
//         title: "AMD STUDIO",
//         tags: ["UI/UX Design", "Full-Stack Development", "Web Development", "Web Design"],
//         image: "amd_mockup",
//     },
//     {
//         year: 2024,
//         title: "NOSH & NOOK",
//         tags: ["UI/UX Design", "Full-Stack Development", "Web Development", "Web Design"],
//         image: "nosh_mockup",
//     },
//     {
//         year: 2024,
//         title: "PAGEPILOT",
//         tags: ["UI/UX Design", "Full-Stack Development", "Web Development", "Web Design"],
//         image: "page_pilot",
//     },
//     {
//         year: 2024,
//         title: "FLEX WORKSPACE",
//         tags: ["UI/UX Design", "Full-Stack Development", "Web Development", "Web Design"],
//         image: "flex_workspace",
//     },
// ];

// const Portfolio = ({ setHoveringCard }) => {
//     return (
//         <div className="portfolio">
//             {projects.map((project, index) => (
//                 <ProjectCard key={index} project={project} setHoveringCard={setHoveringCard} />
//             ))}
//         </div>
//     );
// };

const PortfolioSection = ({ setHoveringCard, limit }) => {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <div className="portfolio">
            {displayedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} setHoveringCard={setHoveringCard} />
            ))}
        </div>
    );
};

export default PortfolioSection;

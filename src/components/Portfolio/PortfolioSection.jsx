import React from "react";
import './PortfolioSection.css'
import ProjectCard from "./ProjectCard";
import projects from "./Projects"; 

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

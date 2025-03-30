import React from "react";
import './ProjectCard.css'
import assets from "../../assets"; // Ensure correct path

// const ProjectCard = ({ project, setHoveringCard }) => {
//     return (
//         <div
//             className="project-card"
//             onMouseEnter={() => setHoveringCard(true)}
//             onMouseLeave={() => setHoveringCard(false)}
//         >
//             <div className="project-info">
//                 <p className="year">©{project.year}</p>
//                 <div className="tags">
//                     {project.tags.map((tag, index) => (
//                         <span key={index} className="tag">
//                             {tag}
//                         </span>
//                     ))}
//                 </div>
//                 <h2 className="title">{project.title}</h2>
//             </div>
//             <div className="project-image">
//                 <img src={assets[project.image]} alt={project.title} />
//             </div>
//         </div>
//     );
// };

// export default ProjectCard;

const ProjectCard = ({ project, setHoveringCard }) => {
    const handleClick = () => {
        if (project.url) {
            window.open(project.url, "_blank", "noopener,noreferrer"); // Opens in a new tab
        }
    };

    return (
        <div
            className="project-card"
            onMouseEnter={() => setHoveringCard(true)}
            onMouseLeave={() => setHoveringCard(false)}
            onClick={handleClick} // 🔹 Clicking opens the URL
            style={{ cursor: "pointer" }}
        >
            <div className="project-info">
                <p className="year">©{project.year}</p>
                <div className="tags">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
                <h2 className="title">{project.title}</h2>
            </div>
            <div className="project-image">
                <img src={assets[project.image]} alt={project.title} />
            </div>
        </div>
    );
};


export default ProjectCard
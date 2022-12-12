// Import react router dom components
import { useNavigate } from "react-router-dom";

// Import contexts
import { useCurrentProject } from "../../Contexts/currentProject";

// Import css
import "./Project.css";

// Import react icons
import { AiFillCode } from "react-icons/ai";

// Import image
import lion from "../../Assets/images/lion.jpg";
import React from "react";

/**
 * Component that contains project card
 *
 * @Component
 * @param {Object} project project contains project's data
 * @returns {React.element}
 */
function Project({ project }) {
  // Context that is used to share project info between project and workspace
  const { currentProject, setCurrentProject } = useCurrentProject();

  // To redirect after click
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentProject(JSON.stringify(project));
    navigate("/Workspace");
  };
  return (
    <div className="card mb-4 shadow" onClick={handleClick}>
      <img src={lion} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <AiFillCode size={40} />
          <div className="card__header-text">
            <h3 className="card__title">{project.title}</h3>
            <span className="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">{project.description}</p>
      </div>
    </div>
  );
}

export default Project;

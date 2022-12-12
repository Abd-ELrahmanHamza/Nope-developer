// Import bootstarp components
import Button from "react-bootstrap/Button";

// Import hooks
import { useState } from "react";

// Import custom hooks
import useFetch from "../../Hooks/useFetch";

// Import bootstrap components
import { Container } from "react-bootstrap";

// Import components
import Project from "../Project/Project";
import ProjectModal from "../ProjectModal/ProjectModal";

// Import css
import "./Projects.css";

// Import backend
import BACKEND from "../../Helpers/EndPoint";

/**
 * Component that contains projects and project modal
 *
 * @Component
 * @returns {React.element}
 */
const Projects = () => {
  // Modal state
  const [modalShow, setModalShow] = useState(false);

  const {
    error,
    isPending,
    data: projects,
  } = useFetch(`${BACKEND}api/projects/`);

  return (
    <Container className="p-3 Projects">
      <div className="projects-header">
        <h2 className="display-6">Dashboard</h2>
        <Button
          style={{ backgroundColor: "#2196f3" }}
          onClick={() => setModalShow(true)}
        >
          New project
        </Button>

        <ProjectModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <hr />
      <Container className="d-flex flex-row flex-wrap justify-content-around">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {projects &&
          projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
      </Container>
    </Container>
  );
};

export default Projects;

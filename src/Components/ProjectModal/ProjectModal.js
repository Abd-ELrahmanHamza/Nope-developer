// Import bootstrap components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// Import hooks
import React, { useState } from "react";

// Import react router dom
import { useNavigate } from "react-router-dom";

// Import back end endpoint
import BACKEND from "../../Helpers/EndPoint";

// Import contexts
import { useAuth } from "../../Authentication/Authentication";
import { useCurrentProject } from "../../Contexts/currentProject";
import { useJsCode } from "../../Contexts/jsCode";

/**
 * Component for modal that contains the form
 *
 * @Component
 * @param {Object} props the received props
 * @returns {React.element}
 */
function ProjectModal(props) {
  // State for project title
  const [title, setTitle] = useState("");

  // State for project description
  const [description, setDescription] = useState("");

  // State for pending request
  const [isPending, setIsPending] = useState(false);

  // State for errors in request
  const [error, setError] = useState(null);

  // Used for authentication
  const auth = useAuth();

  // Context that is used to share project info between project and workspace
  const { currentProject, setCurrentProject } = useCurrentProject();

  // Context for user's javascript code
  const { jsCode, setJsCode } = useJsCode();

  // Used to navigate to workspace
  const navigate = useNavigate();

  /**
   * Submit handler
   *
   * @param {Event} e The occurred event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const project = { title, description };

    const afterFetch = async (response) => {
      if (!response.ok) {
        return response.text();
      }
      setIsPending(false);
      setError(null);
      const appPath = await response.text();
      setCurrentProject(
        JSON.stringify({ ...project, generatedAppPath: appPath })
      );
      setJsCode("");
      navigate("/Workspace");
    };

    const handleFetchError = (error) => {
      if (error.name === "AbortError") return;
      setError(error.message);
      setIsPending(false);
    };

    setIsPending(true);

    const abortController = new AbortController();

    fetch(
      `${BACKEND}api/projects/Create/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Authorization: "Bearer " + auth.getToken(),
        },
        body: JSON.stringify(project),
      },
      { signal: abortController.signal }
    )
      .then(afterFetch)
      .then((errorText) => {
        throw Error(errorText);
      })
      .catch(handleFetchError);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Fill project information</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          {error && <div className="alert alert-danger">{error}</div>}
          {!isPending && (
            <Button
              style={{ backgroundColor: "#2196f3" }}
              onClick={handleSubmit}
            >
              Add project
            </Button>
          )}
          {isPending && (
            <button disabled style={{ backgroundColor: "gray" }}>
              Add project
            </button>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ProjectModal;

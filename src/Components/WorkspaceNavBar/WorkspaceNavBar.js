// Import bootstrap components
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

// Import helpers
import generateCode from "../../Helpers/generateCode";

// Import hooks
import React, { useState } from "react";

// Import react router dom components
import { Link, useNavigate } from "react-router-dom";

// Import contexts
import { useAuth } from "../../Authentication/Authentication";
import { useCurrentProject } from "../../Contexts/currentProject";
import { useJsCode } from "../../Contexts/jsCode";
import { useHtmlCode } from "../../Contexts/HtmlCode";

// Import components
import SideBar from "../SideBar/SideBar";
import getCSS from "../../Helpers/getCSS";

// Import build json handler
import { convert_HTML_To_JSON } from "../../Helpers/buildJSON";

// Import react icons
import { AiFillSave, AiOutlineCode } from "react-icons/ai";
import { BsSave2Fill } from "react-icons/bs";
import { MdPreview } from "react-icons/md";

// Import Backend endpoint
import BACKEND from "../../Helpers/EndPoint";

/**
 * Workspace navbar
 *
 * @Component
 * @returns {React.element}
 */
const WorkspaceNavBar = () => {
  // State for save request state
  const [isPending, setIsPending] = useState(false);

  // State for error in request
  const [error, setError] = useState(null);

  // Global context for authentication
  const auth = useAuth();

  // Javascript code for user's page
  const { jsCode } = useJsCode();

  // Html code for user's page
  const { htmlCode, setHtmlCode } = useHtmlCode();

  // Context that is used to share project info between project and workspace
  const { currentProject } = useCurrentProject();

  // To navigate to the preview page
  const navigate = useNavigate();

  // Function to send files html, css, javascript
  const sendFile = (code, type) => {
    var index2 = new File([code], `index.${type}`);
    const formData = new FormData();
    formData.append("file", index2);
    formData.append("FileName", `index.${type}`);
    fetch(
      `${BACKEND}api/projects/saveimage/${
        JSON.parse(currentProject).generatedAppPath
      }`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + auth.getToken(),
        },
        body: formData,
      }
    )
      .then((response) => response.text())
      .then((result) => {
        // console.log("Success", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Save project handler
  const handleSave = (e) => {
    // Prevent default action
    e.preventDefault();

    // Get generated code
    let code = generateCode(JSON.parse(currentProject).title);
    const widgets = convert_HTML_To_JSON();

    // Replace images icon path with the relative path
    code = code.replace(
      `${BACKEND}api/projects/loadimage/${
        JSON.parse(currentProject).generatedAppPath
      }`,
      ""
    );

    // Send html, css and javascript files
    sendFile(code, "html");
    sendFile(jsCode, "js");
    const css = getCSS();
    sendFile(css, "css");

    // Send json structure of project
    const projectToSend = {
      Widgets: JSON.stringify(widgets),
      Title: JSON.parse(currentProject).title,
    };

    const afterFetch = (response) => {
      if (!response.ok) {
        throw response;
      }
      setIsPending(false);
      setError(null);
    };

    const handleFetchError = (response) => {
      setError(response.statusText);
      setIsPending(false);
    };

    setIsPending(true);
    fetch(`${BACKEND}api/projects/Save/`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + auth.getToken(),
      },
      body: JSON.stringify(projectToSend),
    })
      .then(afterFetch)
      .catch(handleFetchError);
  };

  // Download project handler
  const handleDownload = (e) => {
    fetch(
      `${BACKEND}api/projects/Download/${JSON.parse(currentProject).title}`,
      {
        method: "Get",
        headers: {
          "Content-Type": "Application/json",
          Authorization: "Bearer " + auth.getToken(),
        },
      }
    )
      .then((res) => {
        return res.blob();
      })
      .then((data) => {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(data);
        a.download = JSON.parse(currentProject).title;
        a.click();
      });
  };

  // Handler for page preview
  const handlePreview = () => {
    setHtmlCode(document.getElementById("body").innerHTML);
    navigate("/preview");
  };
  // Handler for page preview
  const handleEdit = () => {
    // navigate("/Edit");
    setHtmlCode(document.getElementById("body").innerHTML);
    navigate("/edit");
  };
  return (
    <Navbar bg="dark" variant="dark">
      {/* The sidebar that contains the widgets that the user can use */}
      {/* <SideBar /> */}
      <Container fluid>
        {/* Website Name */}
        <Link to="/Dashboard" className="btn d-flex align-items-center">
          <span className="text-light">
            <AiOutlineCode size={40} />
          </span>
          <Navbar.Brand className="ms-1">Noob Developer</Navbar.Brand>
        </Link>
        <Navbar.Brand className="me-auto">
          {currentProject !== null
            ? JSON.parse(currentProject).title
            : "Your work won't be saved"}
        </Navbar.Brand>
        {/* <Nav className="me-auto">
          <Link className="nav-link" to={"/Dashboard"}>
            Dashboard
          </Link>
        </Nav> */}
        <Button
          className="d-flex align-items-center"
          variant="success"
          onClick={handleSave}
        >
          <AiFillSave />
          <span className="d-block ms-1">Save</span>
        </Button>
        <Button
          className="d-flex align-items-center ms-1"
          variant="success"
          onClick={handleDownload}
        >
          <BsSave2Fill />
          <span className="d-block ms-1">Download</span>
        </Button>

        <Button
          className="d-flex align-items-center ms-1"
          variant="success"
          onClick={handlePreview}
        >
          <MdPreview />
          <span className="d-block ms-1">Preview</span>
        </Button>
        {/* <Button
          className="d-flex align-items-center m-1"
          variant="success"
          onClick={handleEdit}
        >
          <MdPreview />
          <span className="d-block ms-1">Edit</span>
        </Button> */}
      </Container>
    </Navbar>
  );
};

export default WorkspaceNavBar;

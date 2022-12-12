import React from "react";

// Import components
import Body from "../../Components/Widgets/Body/Body";
import StyleBar from "../../Components/StyleBar/StyleBar";
import SideBar from "../../Components/SideBar/SideBar";

// Import bootstrap components
import Container from "react-bootstrap/Container";

// Import CSS file
import WorkspaceNavBar from "../../Components/WorkspaceNavBar/WorkspaceNavBar";

// Import custom hooks
import useFetch from "../../Hooks/useFetch";

// Import contexts
import { useSelectedWidget } from "../../Contexts/selectedWidget";
import { useWidgetToEdit } from "../../Contexts/widgetToEdit";
import { useCurrentProject } from "../../Contexts/currentProject";

// Import backend endpoint
import BACKEND from "../../Helpers/EndPoint";

/**
 * The workspace page
 *
 * @Component
 * @returns {React.Component}
 */
const Workspace = () => {
  // A global state that stores the selected widget from sidebar
  const { selectedElement, setSelectedElement } = useSelectedWidget();

  // A global state that stores the widget selected to edit
  const { widgetToEdit, setWidgetToEdit } = useWidgetToEdit();

  // Context that is used to share project info between project and workspace
  const { currentProject, setCurrentProject } = useCurrentProject();

  // This variable stores the page in JSON format for the database
  const pageJSON = {};

  const {
    error,
    isPending,
    data: codeSnippet,
  } = useFetch(
    `${BACKEND}api/projects/projecttitle/${JSON.parse(currentProject).title}`,
    "POST"
  );

  return (
    <>
      <WorkspaceNavBar />
      {/* style bar context */}
      {error && <div className="alert alert-danger">{error}</div>}
      {isPending && <div>Loading...</div>}

      <Container className="mt-2 row" fluid>
        <div className="col-4">
          <SideBar />
        </div>
        {/* The sidebar that contains the widgets that the user can use
        <SideBar /> */}

        {/* The body is the area where the user can build his page */}
        {/* The body of the user's page */}
        <div className="col-8 h-100">
          <Body
            childrenToLoad={codeSnippet !== null ? codeSnippet.children : ""}
          />
          {/* This header shows the selected widget */}
          <h2 style={{ textAlign: "center" }}>
            {selectedElement === null
              ? "Select an element"
              : selectedElement.name}
          </h2>
        </div>
      </Container>
    </>
  );
};

export default Workspace;

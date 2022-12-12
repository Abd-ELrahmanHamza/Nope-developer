// Bootstrap components
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// Import icons
import { FaBars } from "react-icons/fa";

// Import custom hooks
import useFetch from "../../Hooks/useFetch";

// Import css
import "./Sidebar.css";

// Import contexts
import { useWidgets } from "../../Contexts/widgets";
import { useWidgetToEdit } from "../../Contexts/widgetToEdit";

// Import hooks
import { useEffect } from "react";

// Import components
import DesignGroup from "../DesignGroup/DesignGroup";

// Import backend
import BACKEND from "../../Helpers/EndPoint";
import StyleBar from "../StyleBar/StyleBar";

/**
 * Component that contains the sidebar (Contains the widgets that the user can use)
 *
 * @Component
 * @returns {React.element}
 */
function SideBar() {
  // State for the side bar open and close
  const [show, setShow] = useState(false);

  // widgets context to store it for its id
  const { widgets, setWidgets } = useWidgets();

  // State that sets the context that contains the state of style of selected widget
  const { widgetToEdit, setWidgetToEdit } = useWidgetToEdit();

  // Handlers for open and close the sidebar
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Fetch widgets
  const {
    error,
    isPending,
    data: widgetsData,
  } = useFetch(`${BACKEND}api/widgets/child/`);

  useEffect(() => {
    let widgetsJSON = null;
    if (widgetsData !== null) {
      widgetsJSON = {};

      // Convert the code snippet from string to JSON
      for (let i = 0; i < widgetsData.length; i++) {
        widgetsJSON[widgetsData[i]["title"]] = widgetsData[i];
        try {
          widgetsData[i]["codeSnippet"] = JSON.parse(
            widgetsData[i]["codeSnippet"]
          );
        } catch (error) {}
      }
    }

    // Set widgets to global state
    if (!widgets) {
      setWidgets(JSON.parse(JSON.stringify(widgetsJSON)));
    }
  });

  // Filter widgets with there design name
  // Contains an object <design name>: [array of widgets]
  let widgetDataSorted = null;
  let lastDesign = "";
  if (widgetsData) {
    // Current design widgets
    let curList = [];

    // Initialize widget data sorted
    widgetDataSorted = {};
    for (const widget of widgetsData) {
      // If design changed the store current design widgets and move to the next design
      if (widget["design"] !== lastDesign) {
        if (curList.length !== 0) widgetDataSorted[lastDesign] = curList;
        curList = [];
        lastDesign = widget["design"];
      }
      curList.push(widget);
    }
    widgetDataSorted[lastDesign] = curList;
  }

  return (
    <div
      className="ms-3 p-3 border border-dark shadow bg-white rounded overflow-auto"
      style={{ height: "85vh" }}
    >
      <Tabs
        defaultActiveKey="Widgets"
        className="mb-3"
        justify
        onSelect={(eventKey) => {
          if (eventKey === "Widgets") {
            setWidgetToEdit(null);
            console.log("Null");
          }
        }}
      >
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <Tab eventKey="Widgets" title="Widgets">
          {widgetDataSorted && (
            <>
              {Object.keys(widgetDataSorted).map((design) => (
                <DesignGroup
                  design={design}
                  widgetDataSorted={widgetDataSorted}
                  key={design}
                />
              ))}
            </>
          )}
        </Tab>
        <Tab eventKey="Style" title="Style">
          {!widgetToEdit && <div>Select widget</div>}
          {widgetToEdit && <StyleBar />}
        </Tab>
      </Tabs>
    </div>
  );
}

export default SideBar;

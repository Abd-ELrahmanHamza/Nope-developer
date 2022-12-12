import React, { useEffect, useState } from "react";
import { useRef } from "react";

// Import bootstrap components
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

// Import Icons
import { useSelectedWidget } from "../../Contexts/selectedWidget";

// Import Backend
import BACKEND from "../../Helpers/EndPoint";

/**
 * Component for widget card in side bar
 *
 * @param {Object} widget Object for widget
 * @returns {React.element}
 */
const WidgetSide = ({ widget }) => {
  // State for open and close of widget card
  const [open, setOpen] = useState(false);

  // This context contains the selected element from the sidebar
  const { setSelectedElement } = useSelectedWidget();

  const ref = useRef();

  useEffect(() => {
    ref.current.addEventListener("dragstart", dragStart);

    function dragStart(e) {
      setSelectedElement(JSON.parse(JSON.stringify(widget.codeSnippet)));
      e.dataTransfer.setData("text/plain", "add-widget");
    }
  }, []);

  return (
    <Card
      id={`widget-side-${widget.title.toUpperCase()}`}
      className="text-center m-3"
      draggable="true"
      ref={ref}
    >
      <Card.Header>{widget.title.toUpperCase()}</Card.Header>

      <Card.Body
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {/* Icon */}
        {/* <DiAtom size={70} /> */}
        <img
          src={`${BACKEND}files/${widget.iconPath}`}
          alt="widget"
          width={100}
          height={100}
        ></img>
        {/* Description */}
        <Collapse in={open}>
          <div id="example-collapse-text">
            {/* Title */}
            <Card.Title>Description</Card.Title>
            <p>{widget.description}</p>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default WidgetSide;

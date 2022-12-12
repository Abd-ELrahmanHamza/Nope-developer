// Import bootstrap components
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

// Import hooks
import React, { useState } from "react";

// Import endpoint
import BACKEND from "../../Helpers/EndPoint";

/**
 * Components that show design group name and description
 *
 * @Component
 * @param {String} design design name
 * @param {object} widgetDataSorted object of arrays
 * @returns {React.element}
 */
const DesignMetaDate = ({ design, widgetDataSorted }) => {
  // State used to open and close design description
  const [open, setOpen] = useState(false);

  return (
    <Card.Body
      onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}
      key={`${design}metadata`}
    >
      {/* Icon */}
      <img
        src={`${BACKEND}files/${widgetDataSorted[design][0].layoutIconPath}`}
        alt="widget"
        width={100}
        height={100}
      ></img>
      {/* Description */}
      <Collapse in={open}>
        <div id="example-collapse-text">
          {/* Title */}
          <Card.Title>Description</Card.Title>
          <p>{widgetDataSorted[design][0].layoutDescription}</p>
        </div>
      </Collapse>
    </Card.Body>
  );
};

export default DesignMetaDate;

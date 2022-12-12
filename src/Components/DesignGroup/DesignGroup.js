// Import bootstrap components
import React from "react";
import Card from "react-bootstrap/Card";

// Import components
import DesignMetaDate from "../DesignMetaDate/DesignMetaData";
import WidgetSide from "../WidgetSide/WidgetSide";

/**
 * Component that contains the widgets of a certain design
 *
 * @param {String} design design name
 * @param {array} widgetDataSorted Object of arrays
 * @Component
 * @returns {React.element}
 */
const DesignGroup = ({ design, widgetDataSorted }) => {
  return (
    <Card className="text-center m-3">
      <Card.Header
        data-toggle="collapse"
        href={`#multiCollapseExample1${design}`}
        role="button"
        aria-expanded="false"
        aria-controls={`multiCollapseExample1${design}`}
      >
        {design}
      </Card.Header>
      <DesignMetaDate design={design} widgetDataSorted={widgetDataSorted} />
      <Card.Body key={`${design}widgets`}>
        <div
          className="collapse multi-collapse"
          id={`multiCollapseExample1${design}`}
        >
          {widgetDataSorted[design].map((element) => (
            <WidgetSide widget={element} key={element.id} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default DesignGroup;

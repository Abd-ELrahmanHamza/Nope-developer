// ImportComponents
import Widget from "../Components/Widgets/Widget/Widget";

/**
 * This function is used to insert the selected element to the list of state children of a component
 *
 * @param {Array} childeren Array of current children
 * @param {Function} setChilderen A function to set state childeren
 * @param {Array} selectedElement A global state that has the name of selected element
 * @param {Function} setSelectedElement The JSON format of the CHILD so that the parent can access it
 * @param {Object} id The body ref that contains the current id
 */
export function insertChild(
  childeren,
  setChilderen,
  selectedElement,
  setSelectedElement
) {
  // According to the selected child insert it's corresponding component
  setChilderen([
    ...childeren,
    <Widget
      WidgetName={selectedElement.name}
      defaultStyling={selectedElement.style}
      childrenToLoad={selectedElement.children}
      myText={selectedElement.text}
      myAttributes={selectedElement.attributes}
      key={Date.now() + Math.random()}
    ></Widget>,
  ]);

  // Set the selected element to null
  setSelectedElement(null);
}

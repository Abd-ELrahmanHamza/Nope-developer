// Import hooks
import React, { useEffect, useState, useRef } from "react";

// Import helpers
import { insertChild } from "../../../Helpers/insertChild";

// Import Components
import Widget from "../Widget/Widget";

// Import bootstrap components
import Container from "react-bootstrap/Container";

// Import contexts
import { useSelectedWidget } from "../../../Contexts/selectedWidget";

/**
 * Component that contains the body of the user's page
 *
 * @Component
 * @param {Array} childrenToLoad array of children objects to load it
 * @returns {React.element}
 */
const Body = ({ childrenToLoad }) => {
  // State to store the Children of current component
  const [myChildren, setMyChildren] = useState([]);

  // This context contains the selected element from the sidebar
  const { selectedElement, setSelectedElement } = useSelectedWidget();

  // State to store id
  const [id, setId] = useState(Date.now() + Math.random());

  // Ref for body
  const ref = useRef();
  useEffect(() => {
    function handleDrag(item) {
      const selectedItem = item.target,
        list = selectedItem.parentNode,
        x = item.clientX,
        y = item.clientY;
      selectedItem.classList.add("drag-sort-active");
      let swapItem =
        document.elementFromPoint(x, y) === null
          ? selectedItem
          : document.elementFromPoint(x, y);

      if (list === swapItem.parentNode) {
        swapItem =
          swapItem !== selectedItem.nextSibling
            ? swapItem
            : swapItem.nextSibling;
        list.insertBefore(selectedItem, swapItem);
      }
    }

    function handleDrop(item) {
      item.target.classList.remove("drag-sort-active");
    }
    ref.current.ondrag = handleDrag;
    ref.current.ondragend = handleDrop;
    /* drop targets */

    ref.current.addEventListener("dragenter", dragEnter);
    ref.current.addEventListener("dragover", dragOver);
    ref.current.addEventListener("dragleave", dragLeave);
    ref.current.addEventListener("drop", drop);

    function dragEnter(e) {
      e.preventDefault();
      e.target.classList.add("drag-over");
    }

    function dragOver(e) {
      e.preventDefault();
      e.target.classList.add("drag-over");
    }

    function dragLeave(e) {
      e.target.classList.remove("drag-over");
    }

    function drop(e) {
      e.target.classList.remove("drag-over");

      if (e.dataTransfer.getData("text/plain") === "add-widget") {
        document.getElementById("body").click();
        return;
      }

      // get the draggable element
      const id = e.dataTransfer.getData("text/plain");
      const draggable = document.getElementById(id);

      // add it to the drop target
      e.target.appendChild(draggable);

      // display the draggable element
      draggable.classList.remove("hide");
    }
    // Drag and drop end
  }, []);
  useEffect(() => {
    // Load project mode
    if (childrenToLoad) {
      let loadedChildren = [];
      for (let i = 0; i < childrenToLoad.length; i++) {
        loadedChildren.push(
          <Widget
            WidgetName={childrenToLoad[i].name}
            defaultStyling={childrenToLoad[i].style}
            childrenToLoad={childrenToLoad[i].children}
            myText={childrenToLoad[i].text}
            myAttributes={childrenToLoad[i].attributes}
            key={Date.now() + Math.random()}
          ></Widget>
        );
      }
      // Set children state (component)
      setMyChildren(loadedChildren);
    }
  }, [childrenToLoad]);

  const handleOnClick = (e) => {
    // Stop propagation to select child only
    e.stopPropagation();

    // If no selected element then don't insert a child
    if (selectedElement === null) return;

    // insert the selected element to my children
    insertChild(myChildren, setMyChildren, selectedElement, setSelectedElement);
  };

  return (
    <Container
      fluid
      onClick={handleOnClick}
      id="body"
      className="border border-dark shadow bg-white rounded overflow-auto"
      style={{
        height: "85vh",
        backgroundColor: "#FFF",
        overflowY: "auto",
        overflowX: "hidden",
      }}
      ref={ref}
    >
      {myChildren}
    </Container>
  );
};

export default Body;

// Import hooks
import React, { useState, useEffect } from "react";

// Import helpers
import { insertChild } from "../../../Helpers/insertChild";

// Import CSS
import "./widget.css";

// Imports contexts
import { useSelectedWidget } from "../../../Contexts/selectedWidget";
import { useWidgetToEdit } from "../../../Contexts/widgetToEdit";
import { useRef } from "react";

/**
 * Component for all widgets
 *
 * @Component
 * @param {String} WidgetName Widget name
 * @param {Array} defaultStyling Array of bootstrap classes
 * @param {Array} childrenToLoad Array of children to the widget
 * @param {String} myText inner text of widget
 * @param {Array} myAttributes Array of attributes of the widget
 * @returns {React.element}
 */
<div className="defaultStyling">text [children]</div>;
const Widget = ({
  WidgetName,
  defaultStyling,
  childrenToLoad,
  myText,
  myAttributes,
}) => {
  /*** START WIDGETS STATES ***/
  // State to store the children of current component
  const [myChildren, setMyChildren] = useState([]);

  // State to store bootstrap style of component
  const [style, setStyle] = useState(defaultStyling);

  // State to store attributes of component
  const [attributes, setAttributes] = useState(myAttributes || {});

  // State to store css style of component
  const [css, setCss] = useState(
    myAttributes ? (myAttributes["style"] ? myAttributes["style"] : {}) : {}
  );

  // State to store id
  const [id, setId] = useState(Date.now() + Math.random());

  // State to store text in component
  const [text, setText] = useState(myText);
  /*** END WIDGETS STATES ***/

  /*** START WIDGETS CONTEXTS ***/
  // This context contains the selected element from the sidebar
  const { selectedElement, setSelectedElement } = useSelectedWidget();

  // Context that control show and hide of style bar
  const { setWidgetToEdit } = useWidgetToEdit();

  // Permanent ref to store the current widget id
  const myRefId = useRef(null);

  useEffect(() => {
    const tempID = id;
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
    // Drag and drop start
    /* draggable element */
    // const item = document.querySelector(myRefId.current);

    myRefId.current.addEventListener("dragstart", dragStart);
    myRefId.current.ondrag = handleDrag;
    myRefId.current.ondragend = handleDrop;

    function dragStart(e) {
      console.log("dragstarted");
      e.dataTransfer.setData("text/plain", e.target.id);
      setTimeout(() => {
        e.target.classList.add("hide");
      }, 0);
    }

    /* drop targets */

    myRefId.current.addEventListener("dragenter", dragEnter);
    myRefId.current.addEventListener("dragover", dragOver);
    myRefId.current.addEventListener("dragleave", dragLeave);
    myRefId.current.addEventListener("drop", drop);

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
      // Stop propagation to select child only
      e.stopPropagation();

      e.target.classList.remove("drag-over");

      if (e.dataTransfer.getData("text/plain") === "add-widget") {
        document.getElementById(tempID).click();
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
  /*** END WIDGETS CONTEXTS ***/

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
    // The user wants to edit the widget
    if (selectedElement === null) {
      setWidgetToEdit({
        style,
        setStyle,
        WidgetName,
        text,
        setText,
        attributes,
        setAttributes,
        css,
        setCss,
        myId: id,
        isVoid: text === null,
      });
      return;
    }
    // If void element then don't insert element
    if (text === null) return;

    // insert the selected element to my children
    insertChild(myChildren, setMyChildren, selectedElement, setSelectedElement);

    // If no selected element then don't insert a child
    if (selectedElement === null) return;
  };

  // This function is used to handle hover event over widget
  function handleMouseOver(e) {
    e.target.classList.add("highlighted");
  }

  // This function is used to handle hover out event over widget
  function handleMouseOut(e) {
    e.target.classList.remove("highlighted");
  }

  // // If display none then it is deleted so don't show
  // if (style["display"] === "d-none") {
  //   return <></>;
  // }

  // Handle Void elements
  // If the element is void then don't add children
  if (myChildren.length === 0) {
    return (
      <WidgetName
        id={id}
        {...attributes}
        onClick={handleOnClick}
        className={
          Object.keys(style)
            .map((key) => style[key])
            .join(" ") + " widget"
        }
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={css}
        ref={myRefId}
        draggable="true"
      >
        {text !== "" && text}
      </WidgetName>
    );
  } else {
    return (
      <WidgetName
        id={id}
        {...attributes}
        onClick={handleOnClick}
        className={
          Object.keys(style)
            .map((key) => style[key])
            .join(" ") + " widget"
        }
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={css}
        ref={myRefId}
        draggable="true"
      >
        {myChildren}
        {text}
      </WidgetName>
    );
  }
};

export default Widget;

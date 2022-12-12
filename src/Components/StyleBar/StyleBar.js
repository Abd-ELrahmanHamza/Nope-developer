// Import bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OptionList from "../OptionList/OptionList";

// Import custom hooks
import useFetch from "../../Hooks/useFetch";

// Import contexts
import { useWidgetToEdit } from "../../Contexts/widgetToEdit";
import { useWidgets } from "../../Contexts/widgets";
import { useJsCode } from "../../Contexts/jsCode";

// Import components
import Image from "../Image/Image";

// Import backend endpoint
import BACKEND from "../../Helpers/EndPoint";

/**
 * Component that contains the style bar where the user can style the selected widget
 *
 * @Component
 * @returns {React.element}
 */
const StyleBar = () => {
  // State that sets the context that contains the state of style of selected widget
  const { widgetToEdit } = useWidgetToEdit();

  // use the global context that stores the widgets to access the ids of the widgets
  const { widgets } = useWidgets();

  // javascript code
  const { jsCode, setJsCode } = useJsCode();

  const {
    error,
    isPending,
    data: properties,
  } = useFetch(`${BACKEND}api/properties/1`);

  const { data: attributes } = useFetch(
    `${BACKEND}api/widgets/Attributes/${
      widgets[widgetToEdit["WidgetName"]]
        ? widgets[widgetToEdit["WidgetName"]]["id"]
        : 1
    }/`,
    "GET"
  );

  console.log(widgetToEdit);
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <div>
        {properties && (
          <div>
            <h2>{widgetToEdit.WidgetName}</h2>
            {properties.map((property) => (
              <div key={property["propertyName"]}>
                <Form.Label>{property["propertyName"]}</Form.Label>
                {property["values"] && (
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => {
                      widgetToEdit.style[property["propertyName"]] =
                        e.target.value;
                      widgetToEdit.setStyle({ ...widgetToEdit.style });
                    }}
                  >
                    {<OptionList property={property}></OptionList>}
                  </Form.Select>
                )}
                {property["units"] && (
                  <Form.Group>
                    <Form.Control
                      type="text"
                      rows={3}
                      id={`${property["propertyName"]}value`}
                    ></Form.Control>
                    <Form.Select
                      aria-label="Default select example"
                      id={`${property["propertyName"]}unit`}
                    >
                      {<OptionList property={property}></OptionList>}
                    </Form.Select>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        const value = document.getElementById(
                          `${property["propertyName"]}value`
                        ).value;
                        const unit = document.getElementById(
                          `${property["propertyName"]}unit`
                        ).value;
                        widgetToEdit.setCss({
                          ...widgetToEdit.css,
                          [property["propertyName"]]: `${value}${unit}`,
                        });
                      }}
                    >
                      Add {property["propertyName"]}
                    </Button>
                  </Form.Group>
                )}
              </div>
            ))}
          </div>
        )}
        {attributes && attributes.length !== 0 && (
          <Form.Group className="mb-3">
            <Image setAttributes={widgetToEdit.setAttributes}></Image>
          </Form.Group>
        )}

        {/* Image width and height */}
        <Form.Group className="my-5">
          <Form.Label>
            Event Handler [id of widget is {widgetToEdit.myId}]
          </Form.Label>
          {/* <Form.Control type="text" required id="event" /> */}
          <Form.Control
            as="textarea"
            rows={3}
            id="jsFunction"
            placeholder="Write a valid javascript function"
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
              setJsCode(jsCode + document.getElementById("jsFunction").value);
            }}
          >
            Add handler
          </Button>
        </Form.Group>

        {/* Change text of none void elements */}
        {widgetToEdit.text && (
          <Form.Group className="mb-3">
            <Form.Label>Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={widgetToEdit.text}
              id="textContent"
            />
            <Button
              variant="primary"
              onClick={() => {
                widgetToEdit.setText(
                  document.getElementById("textContent").value
                );
              }}
            >
              Save
            </Button>
          </Form.Group>
        )}

        <Button
          variant="danger"
          onClick={(e) => {
            widgetToEdit.style["display"] = "d-none";
            widgetToEdit.setStyle({ ...widgetToEdit.style });
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default StyleBar;

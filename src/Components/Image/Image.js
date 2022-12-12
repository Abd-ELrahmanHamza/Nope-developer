import React from "react";

// Import hooks
import { useState } from "react";

// Import images
import login from "../../Assets/images/login.jpg";

// Import contexts
import { useAuth } from "../../Authentication/Authentication";
import { useCurrentProject } from "../../Contexts/currentProject";

// Import end point
import BACKEND from "../../Helpers/EndPoint";

/**
 * initial values for the values state
 */
const initialValues = {
  src: login,
  imageFile: null,
};

/**
 * Image select component
 *
 * @Component
 * @param {Function} setAttributes function that sets the state of the state of selected widget
 * @returns {React.element}
 */
const Image = ({ setAttributes }) => {
  const [values, setValues] = useState(initialValues);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  // Context that is used to share project info between project and workspace
  const { currentProject } = useCurrentProject();

  // Context authentication
  const auth = useAuth();

  /**
   * Handler that show the selected image
   *
   * @param {Event} event the occurred event
   */
  const showPreview = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setFileName(event.target.files[0].name);
      const imageFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({ ...values, imageFile, src: x.target.result });
        setAttributes({ src: x.target.result });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({ ...values, imageFile: null, src: login });
      setAttributes({ src: login });
    }
  };

  /**
   * Handler for submit upload file
   *
   * @param {Event} event the occurred event
   */
  const uploadFile = (event) => {
    event.preventDefault();
    // Create form object and add image to it
    const formData = new FormData();
    formData.append("file", file);
    formData.append("FileName", fileName);
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
      .then((response) => response.blob())
      .then((result) => {
        setAttributes({
          src: `${BACKEND}api/projects/loadimage/${
            JSON.parse(currentProject).generatedAppPath
          }${fileName}`,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <div className="container text-center">
        <p>An Image</p>
      </div>
      <form autoComplete="off" noValidate>
        <div className="card">
          <div className="card-body">
            <div className="form-group text-center">
              <input
                className="form-control form-control-md"
                id="formFileLg"
                type="file"
                accept="image/*"
                name="imageFile"
                onChange={showPreview}
              ></input>
            </div>
            <div className="form-group text-center m-2">
              {
                <button
                  type="submit"
                  className="btn btn-dark"
                  onClick={uploadFile}
                >
                  Submit
                </button>
              }
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Image;

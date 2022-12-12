/**
 * Component contains list of options
 *
 * @Component
 * @param {Object} property the property object
 * @returns {React.element}
 */

import React from "react";

const OptionList = ({ property }) => {
  return (
    <>
      {property["values"] && (
        <>
          <option>Property value</option>
          {property["values"].map((value) => (
            <option key={value["value"]} value={value["value"]}>
              {value["value"] === "" ? "Clear" : value["value"]}
            </option>
          ))}
        </>
      )}
      {property["units"] && (
        <>
          <option>Unit</option>
          {property["units"].map((unit) => (
            <option key={unit["unitName"]} value={unit["unitName"]}>
              {unit["unitName"] === "" ? "Clear" : unit["unitName"]}
            </option>
          ))}
        </>
      )}
    </>
  );
};

export default OptionList;

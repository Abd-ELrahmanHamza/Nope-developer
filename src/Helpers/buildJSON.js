/**
 * Function that converts the string style to json object
 *
 * @param {String} el The style of element as string
 * @returns {Object} The style of element as json
 */
function getStyles(el) {
  var output = {};

  var camelize = function camelize(str) {
    return str.replace(/(?:^|[-])(\w)/g, function (a, c) {
      c = a.substr(0, 1) === "-" ? c.toUpperCase() : c;
      return c ? c : "";
    });
  };

  var style = el.split(";");
  for (var i = 0; i < style.length; ++i) {
    var rule = style[i].trim();

    if (rule) {
      var ruleParts = rule.split(":");
      var key = camelize(ruleParts[0].trim());
      output[key] = ruleParts[1].trim();
    }
  }
  return output;
}

/**
 * Function to extract text nodes of the element
 *
 * @param {Element} curElement Element to extract it's text node
 * @param {Object} myJSON Element's JSON to add text to it
 */
function extractTextNodes(curElement, myJSON) {
  myJSON["text"] = "";
  for (const child of curElement.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      myJSON["text"] = myJSON["text"] + child.nodeValue;
    }
  }
  myJSON["text"] = myJSON["text"].trim();
  if (myJSON["text"].length === 0) myJSON["text"] = null;
}

/**
 * Recursive function that builds the page as json
 *
 * @param {Element} curElement current element
 * @returns {Object} The page JSON
 */
function convert_HTML_To_JSON_Helper(curElement) {
  let myJSON = {};
  myJSON["name"] = curElement.tagName.toLowerCase();
  extractTextNodes(curElement, myJSON);
  myJSON["style"] = curElement.getAttribute("class")
    ? { bootstrap: curElement.getAttribute("class") }
    : {};

  myJSON["attributes"] = curElement.getAttributeNames().map((name) => {
    if (name === "class") return;
    if (name === "style") {
      return { [name]: getStyles(curElement.getAttribute(name)) };
    }
    return { [name]: curElement.getAttribute(name) };
  });

  let finalObj = {};
  for (let i = 0; i < myJSON["attributes"].length; i++) {
    if (myJSON["attributes"][i] !== undefined) {
      Object.assign(finalObj, myJSON["attributes"][i]);
    }
  }
  myJSON["attributes"] = finalObj;
  myJSON["children"] = [];
  for (const child of curElement.children) {
    myJSON["children"].push(convert_HTML_To_JSON_Helper(child));
  }
  return myJSON;
}

/**
 * Function that builds the page as json
 *
 * @returns {Object} The page JSON
 */
export function convert_HTML_To_JSON() {
  let x = convert_HTML_To_JSON_Helper(document.getElementById("body"));
  return x;
}

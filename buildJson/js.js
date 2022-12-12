const element = document.getElementById("play");
const json = {};

function extractChildNodes(curElement, myJSON) {
  myJSON["text"] = "";
  for (const child of curElement.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      myJSON["text"] = myJSON["text"] + child.nodeValue;
    }
  }
  myJSON["text"] = myJSON["text"].trim();
  if (myJSON["text"].length === 0) {
    myJSON["text"] = null;
  }
}
function convert_HTML_To_JSON(curElement) {
  let myJSON = {};
  console.log(curElement);
  console.log(curElement.tagName);
  myJSON["name"] = curElement.tagName.toLowerCase();
  extractChildNodes(curElement, myJSON);
  myJSON["style"] = curElement.getAttribute("class")
    ? { bootstrap: curElement.getAttribute("class") }
    : {};

  myJSON["attributes"] = curElement.getAttributeNames().map((name) => {
    if (name === "class") return;
    return { name: curElement.getAttribute(name) };
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
    myJSON["children"].push(convert_HTML_To_JSON(child));
  }
  return myJSON;
}

console.log(JSON.stringify(convert_HTML_To_JSON(element.children[0], json)));

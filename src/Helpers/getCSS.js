// A function that build css file using recursion

// Get body of the user's page
const element = document.getElementById("body");

// css result string
let css = "";

/**
 * Function that returns the css style as string
 *
 * @returns {String} The page css style
 */
export default function getCSS() {
  css = "";
  getCSSHelper(element);
  return css;
}

/**
 * Function that generates the css style as string
 *
 * @returns {String} The page css style
 */
function getCSSHelper(curElement) {
  if (!curElement) return;
  css += `
    #${curElement.getAttribute("id")}{
        ${curElement.getAttribute("style")}
    }
    `;
  for (const child of curElement.children) {
    getCSSHelper(child);
  }
}

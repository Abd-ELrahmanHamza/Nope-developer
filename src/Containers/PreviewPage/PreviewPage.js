// Import contexts
import { useEffect } from "react";

// Import contexts
import { useHtmlCode } from "../../Contexts/HtmlCode";
import { useJsCode } from "../../Contexts/jsCode";

/**
 * Page to preview the user's page
 *
 * @Component
 * @returns {React.element}
 */
const PreviewPage = () => {
  // User's page javascript code
  const { jsCode } = useJsCode();

  // User's page html code
  const { htmlCode } = useHtmlCode();

  useEffect(() => {
    document.getElementById("userCode").innerHTML = htmlCode;
    const script = document.createElement("script");
    script.innerHTML = jsCode;
    document.body.appendChild(script);
  }, []);
  return <div id="userCode">{htmlCode}</div>;
};

export default PreviewPage;

import { useState } from "react";
import { createContext, useContext } from "react";

export const htmlCodeContext = createContext({});

export const HtmlCodeProvider = ({ children }) => {
  // Context that is used to share project info between project and workspace
  const [htmlCode, setHtmlCode] = useState("");

  return (
    <htmlCodeContext.Provider
      value={{
        htmlCode,
        setHtmlCode,
      }}
    >
      {children}
    </htmlCodeContext.Provider>
  );
};

export const useHtmlCode = () => {
  return useContext(htmlCodeContext);
};

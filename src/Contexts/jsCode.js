import { useState } from "react";
import { createContext, useContext } from "react";

export const jsCodeContext = createContext({});

export const JsCodeProvider = ({ children }) => {
  // Context that is used to share project info between project and workspace
  const [jsCode, setJsCode] = useState("");

  return (
    <jsCodeContext.Provider
      value={{
        jsCode,
        setJsCode,
      }}
    >
      {children}
    </jsCodeContext.Provider>
  );
};

export const useJsCode = () => {
  return useContext(jsCodeContext);
};

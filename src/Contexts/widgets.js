import { createContext, useContext } from "react";

import { useState } from "react";
const widgetsContext = createContext(null);

export const WidgetsProvider = ({ children }) => {
  // A global state that stores the selected widget from sidebar
  const [widgets, setWidgets] = useState(null);

  return (
    <widgetsContext.Provider
      value={{
        widgets,
        setWidgets,
      }}
    >
      {children}
    </widgetsContext.Provider>
  );
};

export const useWidgets = () => {
  return useContext(widgetsContext);
};

import { createContext, useContext } from "react";

import { useState } from "react";
const selectedWidgetContext = createContext(null);

export const SelectedWidgetProvider = ({ children }) => {
  // A global state that stores the selected widget from sidebar
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <selectedWidgetContext.Provider
      value={{
        selectedElement,
        setSelectedElement,
      }}
    >
      {children}
    </selectedWidgetContext.Provider>
  );
};

export const useSelectedWidget = () => {
  return useContext(selectedWidgetContext);
};

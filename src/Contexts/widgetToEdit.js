import { createContext, useContext } from "react";

import { useState } from "react";
export const widgetToEditContext = createContext({});

export const WidgetToEditProvider = ({ children }) => {
  // A global state that stores the widget selected to edit
  const [widgetToEdit, setWidgetToEdit] = useState(null);

  return (
    <widgetToEditContext.Provider
      value={{
        widgetToEdit,
        setWidgetToEdit,
      }}
    >
      {children}
    </widgetToEditContext.Provider>
  );
};

export const useWidgetToEdit = () => {
  return useContext(widgetToEditContext);
};

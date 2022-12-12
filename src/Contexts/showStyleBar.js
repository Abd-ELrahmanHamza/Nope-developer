import { createContext, useContext } from "react";

import { useState } from "react";
export const showStyleBarContext = createContext({});

export const ShowStyleBarProvider = ({ children }) => {
  // A global state that stores the selected widget from sidebar
  const [showStyleBar, setShowStyleBar] = useState(false);

  return (
    <showStyleBarContext.Provider
      value={{
        showStyleBar,
        setShowStyleBar,
      }}
    >
      {children}
    </showStyleBarContext.Provider>
  );
};

export const useShowStyleBar = () => {
  return useContext(showStyleBarContext);
};

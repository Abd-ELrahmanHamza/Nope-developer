import { createContext, useContext } from "react";

import useLocalStorage from "../Authentication/useLocalStorage";

export const currentProjectContext = createContext({});

export const CurrentProjectProvider = ({ children }) => {
  // Context that is used to share project info between project and workspace
  const [currentProject, setCurrentProject] = useLocalStorage(
    "currentProject",
    null
  );

  return (
    <currentProjectContext.Provider
      value={{
        currentProject,
        setCurrentProject,
      }}
    >
      {children}
    </currentProjectContext.Provider>
  );
};

export const useCurrentProject = () => {
  return useContext(currentProjectContext);
};

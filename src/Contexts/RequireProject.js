import { Navigate } from "react-router-dom";
import { useCurrentProject } from "./currentProject";

const RequireProject = ({ children }) => {
  const { currentProject } = useCurrentProject();

  if (currentProject === null || currentProject === "null") {
    return <Navigate to="/Dashboard"></Navigate>;
  }
  return children;
};

export default RequireProject;

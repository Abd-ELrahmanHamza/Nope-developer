import { Navigate } from "react-router-dom";
import { useAuth } from "./Authentication";

const RequireAuth = ({ children }) => {
  const auth = useAuth();

  if (!auth.isLoggedIn()) {
    return <Navigate to="/Login"></Navigate>;
  }
  return children;
};

export default RequireAuth;

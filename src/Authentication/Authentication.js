import { createContext, useContext } from "react";

import useLocalStorage from "./useLocalStorage";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [token, setToken] = useLocalStorage("token", null);
  const [expirationDate, setExpirationDate] = useLocalStorage(
    "expirationDate",
    null
  );

  const login = async (user) => {
    setToken(user.token);
    setExpirationDate(user.expiration);
    setUser(user.userName);
  };
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  const getToken = () => {
    return token;
  };

  const getExpirationDate = () => {
    return expirationDate;
  };

  const isLoggedIn = () => {
    return user !== null && user !== "null";
  };
  return (
    <AuthContext.Provider
      value={{ user, login, logout, getToken, getExpirationDate, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

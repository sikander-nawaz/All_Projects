import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "Config/Firebase";
export const AuthenticatedContext = createContext();

function AuthenticatedContextProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoader, setIsLoader] = useState(true);
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setIsAuthenticated(false);
      }
      setIsLoader(false);
    });
  }, []);

  return (
    <AuthenticatedContext.Provider
      value={{
        isAuthenticated,
        isLoader,
        setIsAuthenticated,
        user,
        userId,
        setUserId,
      }}
    >
      {props.children}
    </AuthenticatedContext.Provider>
  );
}
export default AuthenticatedContextProvider;

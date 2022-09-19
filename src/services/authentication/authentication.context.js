import React, { useState, createContext } from "react";
import { loginRequest, registerRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
    .then(user => {
      setUser(user);
      setIsLoading(false);
    }).catch(error => {
      setIsLoading(false);
      setError(error.toString());
    });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Password do not match");
      return;
    }
    registerRequest(email, password)
    .then(u => { 
      setUser(u);
      setIsLoading(false);
    }).catch(e => {
      setIsLoading(false);
      setError(e.toString());
    });
  };

  return (
    <AuthenticationContext.Provider value={{
      isAuthenticated: !!user,
      user,
      isLoading,
      error,
      onLogin,
      onRegister,
    }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

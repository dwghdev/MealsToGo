import React, { useState, createContext } from "react";
import { 
  logout,
  loginRequest, 
  registerRequest, 
} from "./authentication.service";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  firebase.auth().onAuthStateChanged(usr => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      setUser(user);
      setIsLoading(false);
    }).catch(error => {
      setIsLoading(false);
      setError(error.toString());
    });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Password do not match");
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(u => { 
      setUser(u);
      setIsLoading(false);
    }).catch(e => {
      setIsLoading(false);
      setError(e.toString());
    });
  };

  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
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
      onLogout,
    }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

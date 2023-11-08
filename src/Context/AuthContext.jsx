import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
    isLogin: localStorage.getItem("token") ? true : false,
  });
  const logOut = () => {
    setUser({
      token: "",
      isLogin: false,
    });
    localStorage.removeItem("token");
  };
  const [search, setSearch] = useState({
    search: "",
  });
  return (
    <AuthContext.Provider value={{ user, search, setSearch , setUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

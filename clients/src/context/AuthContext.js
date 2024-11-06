import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('adminToken') || null,
    isAuthenticated: !!localStorage.getItem('adminToken')
  });

  const login = (token) => {
    localStorage.setItem('adminToken', token);
    setAuth({ token, isAuthenticated: true });
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setAuth({ token: null, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

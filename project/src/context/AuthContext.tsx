import React, { createContext, useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  register: (userData: { name: string; email: string; password: string }) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Check if user is already logged in
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem('isAuthenticated', String(isAuthenticated));
    localStorage.setItem('user', user ? JSON.stringify(user) : '');
  }, [isAuthenticated, user]);

  const login = (email: string, password: string) => {
    // Since we're not using a real backend, we'll simulate a successful login
    // In a real app, we would validate credentials with an API
    
    // Check if user exists in localStorage (for our simulation)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      setIsAuthenticated(true);
      setUser({ name: foundUser.name, email: foundUser.email });
    } else {
      // For demo purposes, let's create a mock successful login
      setIsAuthenticated(true);
      setUser({ name: 'Guest User', email: email });
    }
  };

  const register = (userData: { name: string; email: string; password: string }) => {
    // In a real app, we would send this data to an API
    // For now, we'll store it in localStorage to simulate registration
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login after registration
    setIsAuthenticated(true);
    setUser({ name: userData.name, email: userData.email });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
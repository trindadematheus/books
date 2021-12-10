import React, { useState, createContext, useContext, useEffect } from "react";

import api from "../services/api";
import User from "../types/user";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  user: User | null;
  setUser(user: User | null): void;
  saveUser(user: User, headers: any): void;
  logOut(): void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storagedToken = localStorage.getItem('Books:token')
    const storagedUser = localStorage.getItem('Books:user')

    if (!storagedToken || !storagedUser) {
      setUser(null);

      return;
    }

    saveUser(JSON.parse(storagedUser), storagedToken)
  }, [])

  function saveUser(user: User, token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setUser(user)
  }

  function logOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        saveUser,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}

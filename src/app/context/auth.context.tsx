"use client";

import LoginForm from "@/components/molecules/login-form";
import { ComponentWithChildren } from "@/components/types/shared";
import { hasToken } from "@/lib/http-client";
import { createContext, useContext, useEffect, useState } from "react";
type AuthContextType = () => void;

const AuthContext = createContext<AuthContextType>(() => {});
export default function AuthProvider({
  children,
}: ComponentWithChildren): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsLoggedIn(hasToken());
  }, []);

  return (
    <AuthContext.Provider value={() => setIsLoggedIn(true)}>
      {isLoggedIn ? children : <LoginForm />}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};

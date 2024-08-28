"use client";

import { ComponentWithChildren } from "@/components/types/shared";
import { hasToken } from "@/lib/http-client";
import { useEffect, useState } from "react";
import LoginForm from "@/components/molecules/login-form";

export default function PortalLayout({ children }: ComponentWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsLoggedIn(hasToken());
  }, []);

  if (!isLoggedIn) {
  }
  return (
    <div className="mx-4 flex flex-col items-center pt-24">
      {isLoggedIn ? children : <LoginForm />}
    </div>
  );
}

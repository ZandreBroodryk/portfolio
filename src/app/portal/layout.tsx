"use client";

import { ComponentWithChildren } from "@/components/types/shared";
import AuthProvider from "../context/auth.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function PortalLayout({ children }: ComponentWithChildren) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <div className="mx-4 flex flex-col items-center pt-24">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </AuthProvider>
    </div>
  );
}

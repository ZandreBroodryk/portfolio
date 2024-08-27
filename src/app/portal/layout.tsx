"use client";

import { ComponentWithChildren } from "@/components/types/shared";

export default function PortalLayout({ children }: ComponentWithChildren) {
  return (
    <div className="mx-4 flex flex-col items-center pt-24">{children}</div>
  );
}

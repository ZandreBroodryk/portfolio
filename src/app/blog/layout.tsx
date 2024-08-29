import { ComponentWithChildren } from "@/components/types/shared";
import { ReactNode } from "react";

export default function BlogLayout({
  children,
}: ComponentWithChildren): ReactNode {
  return (
    <div className="flex min-h-screen flex-col items-center bg-neutral-700 px-8 pt-16">
      <div className="flex flex-col items-start gap-3">{children}</div>
    </div>
  );
}

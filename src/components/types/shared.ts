import { ReactNode } from "react";

export type ComponentWithChildren = Readonly<{
  children: ReactNode;
}>;

import { ReactNode } from "react";
import { ComponentWithChildren } from "../types/shared";

type CardProps = ComponentWithChildren;

export default function Card(props: CardProps): ReactNode {
  return (
    <div className="relative flex size-fit overflow-hidden rounded-3xl border border-neutral-600 bg-neutral-800 bg-opacity-20 p-1 text-neutral-200 backdrop-blur transition-colors duration-700 hover:bg-opacity-50 hover:text-white">
      {props.children}
    </div>
  );
}

"use client";

import { ReactNode } from "react";
import Copy from "../icons/copy";

type CopyToClipBoardProps = {
  text: string;
};

export default function CopyToClipBoard({
  text,
}: CopyToClipBoardProps): ReactNode {
  const copyToClipBoard = () => navigator.clipboard.writeText(text);
  return (
    <button onClick={copyToClipBoard}>
      <Copy className="size-8" />
    </button>
  );
}

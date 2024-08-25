import Link from "next/link";
import { ReactNode } from "react";

export default function Page(): ReactNode {
  return (
    <div className="flex flex-col p-4">
      <h1>Welcome to my Blog</h1>
      <h2>Some blog entries will be added here over time</h2>
      <ol className="list-decimal">
        <li>
          <Link href={"blog/default"}>Hard coded blog</Link>
        </li>
        <li>
          <Link href={"blog/markdown"}>Generated from markdown</Link>
        </li>
      </ol>
    </div>
  );
}

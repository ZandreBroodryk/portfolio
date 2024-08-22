import { ReactNode } from "react";

export default function Page(): ReactNode {
  return (
    <div className="flex flex-col p-4">
      <h1>Welcome to my Blog</h1>
      <h2>Some blog entries will be added here over time</h2>
    </div>
  );
}

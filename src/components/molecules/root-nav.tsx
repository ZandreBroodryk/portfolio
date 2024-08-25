import { ReactNode } from "react";
import Card from "../atoms/card";
import Link from "next/link";

export default function RootNav(): ReactNode {
  return (
    <div className="fixed top-2 z-50 flex w-full flex-col items-center">
      <Card>
        <div className="flex gap-3 p-2 text-neutral-300">
          <Link className="hover:font-bold hover:text-white" href="/">
            Home
          </Link>
          <Link className="hover:font-bold hover:text-white" href="/blog">
            Blog
          </Link>
        </div>
      </Card>
    </div>
  );
}

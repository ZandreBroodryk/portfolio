import { ReactNode } from "react";
import Card from "../atoms/card";
import CSharp from "../icons/c-sharp";
import Docker from "../icons/docker";
import NextLogo from "../icons/next";
import Postgres from "../icons/postgres";
import ReactLogo from "../icons/react";
import Rust from "../icons/rust";
import TailwindCss from "../icons/tailwind";
import TypeScript from "../icons/typescript";
import Vercel from "../icons/vercel";

export default function MySkills(): ReactNode {
  return (
    <Card>
      <div className="m-2 flex max-w-96 flex-col gap-4">
        <h1>Technologies</h1>
        <div className="flex flex-wrap gap-2 space-y-2">
          <Rust className="size-20 min-h-20 min-w-20" />
          <CSharp className="size-20" />
          <Postgres className="size-20" />
          <TypeScript className="size-20" />
          <ReactLogo className="size-20" />
          <NextLogo className="size-20" />
          <TailwindCss className="size-20" />
          <Vercel className="size-20" />
          <Docker className="size-20" />
        </div>
      </div>
    </Card>
  );
}

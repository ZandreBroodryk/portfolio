import Rust from "@/icons/rust";
import SectionHeading from "./section-heading";
import CSharp from "@/icons/c-sharp";
import TypeScript from "@/icons/typescript";
import Docker from "@/icons/docker";
import ReactLogo from "@/icons/react";
import Postgres from "@/icons/postgres";
import TailwindCss from "@/icons/tailwind";
import NextLogo from "@/icons/next";
import Vercel from "@/icons/vercel";
import ShuttleLogo from "@/icons/shuttle-logo";
import AzureLogo from "@/icons/azure-logo";

export default function Technologies() {
  return (
    <>
      <SectionHeading text="Technologies" />
      <h3 className="my-4 text-xl font-bold">Languages</h3>
      <div className="flex flex-row flex-wrap gap-7">
        <Technology
          icon={<Rust className="size-20" />}
          title="Rust"
          description="Back end development"
        />
        <Technology
          icon={<CSharp className="size-20" />}
          title="C#"
          description="Back end development"
        />
        <Technology
          icon={<TypeScript className="size-20" />}
          title="Typescript"
          description="Full stack development"
        />
      </div>
      <h3 className="my-4 text-xl font-bold">Tools</h3>
      <div className="flex flex-row flex-wrap gap-7">
        <Technology
          icon={<Postgres className="size-20" />}
          title="PostgreSQL"
          description="Database of choice"
        />
        <Technology
          icon={<Docker className="size-20" />}
          title="Docker"
          description="Containerization"
        />
        <Technology
          icon={<ReactLogo className="size-20" />}
          title="React & React Native"
          description="Front end state management"
        />
        <Technology
          icon={<TailwindCss className="size-20" />}
          title="Tailwindcss"
          description="Styling framework"
        />
        <Technology
          icon={<NextLogo className="size-20" />}
          title="Next.js"
          description="React framework of choice"
        />
      </div>
      <h3 className="my-4 text-xl font-bold">Hosting</h3>
      <div className="flex flex-row flex-wrap gap-7">
        <Technology
          icon={<Vercel className="size-20" />}
          title="Vercel"
          description="Epic free tier"
        />
        <Technology
          icon={<ShuttleLogo className="size-20" />}
          title="Shuttle.rs"
          description="Vercel for rust"
        />
        <Technology
          icon={<AzureLogo className="size-20" />}
          title="Microsoft Azure"
          description="Enterprise cloud hosting"
        />
      </div>
    </>
  );
}
type TechnologyProps = {
  icon: React.ReactNode;
  title: string;
  description?: string;
};
function Technology(props: TechnologyProps) {
  return (
    <div className="flex flex-row gap-3">
      {props.icon}
      <div className="flex w-50 flex-col justify-center">
        <p>{props.title}</p>
        <p
          className={`text-neutral-500 opacity-0 ${props.description ? "hover:opacity-100" : "hidden"}`}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
}

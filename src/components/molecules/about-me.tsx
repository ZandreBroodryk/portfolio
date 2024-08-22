import { ReactNode } from "react";
import Card from "../atoms/card";
import Image from "next/image";

export default function AboutMe(): ReactNode {
  return (
    <Card>
      <div className="m-2 flex max-w-96 flex-col gap-4">
        <div className="flex items-center gap-2">
          <Image
            src={"/profile-picture.jpg"}
            height={50}
            width={50}
            alt="Me"
            className="size-14 rounded-full"
          />
          <h1 className="bg-gradient-to-r from-indigo-700 to-fuchsia-700 bg-clip-text text-transparent">
            Zandré Broodryk
          </h1>
        </div>
        <p>I am a chemical engineer turned software engineer and loving it!</p>
        <p>Currently fullstack software engineer for FuelX</p>
      </div>
    </Card>
  );
}

import { ReactNode } from "react";
import Card from "../atoms/card";
import Image from "next/image";
import SaFlag from "../icons/sa-flag-round";

export default function AboutMe(): ReactNode {
  return (
    <Card>
      <div className="m-2 flex max-w-96 flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="relative flex size-16 items-center">
            <SaFlag className="size-16" round />
            <Image
              src={"/profile-picture.jpg"}
              height={50}
              width={50}
              alt="Me"
              className="absolute left-1/2 size-14 -translate-x-1/2 rounded-full"
            />
          </div>
          <h1
          // className="bg-gradient-to-r from-amber-700 to-green-700 bg-clip-text text-transparent"
          >
            Zandré Broodryk
          </h1>
        </div>
        <p>I am a chemical engineer turned software engineer and loving it!</p>
        <p>Currently fullstack software engineer for FuelX</p>
      </div>
    </Card>
  );
}

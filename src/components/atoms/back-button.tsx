"use client";
import { useRouter } from "next/navigation";
import ArrowLeft from "../icons/arrow-left";
import Button from "./button";

type BackButtonProps = {
  label: string;
};

export default function BackButton({ label }: BackButtonProps): JSX.Element {
  const router = useRouter();
  return (
    <Button
      onClick={router.back}
      className="mb-8 flex items-center hover:underline"
    >
      <ArrowLeft className="mr-2 size-4" /> {label}
    </Button>
  );
}

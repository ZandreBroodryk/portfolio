"use client";
import { useRouter } from "next/navigation";
import ArrowLeft from "../icons/arrow-left";
import Button from "./button";

type BackButtonProps = {
  label: string;
  route?: string;
};

export default function BackButton({
  label,
  route,
}: BackButtonProps): JSX.Element {
  const router = useRouter();
  const goBack = () => {
    if (route) {
      router.push(route);
      return;
    }
    router.back();
  };
  return (
    <Button onClick={goBack} className="mb-8 flex items-center hover:underline">
      <ArrowLeft className="mr-2 size-4" /> {label}
    </Button>
  );
}

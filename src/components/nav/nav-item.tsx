"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};
export default function NavItem({ href, children }: NavItemProps) {
  const currentPath = usePathname();

  const isSamePath = currentPath === href;

  const isPossibleSubPath =
    currentPath.startsWith(href) &&
    currentPath.replace(href, "").startsWith("/");

  return (
    <Link
      href={href}
      className={`px-2 transition-all hover:text-lime-400 ${isSamePath || isPossibleSubPath ? "font-bold underline" : "font-thin"}`}
    >
      {children}
    </Link>
  );
}

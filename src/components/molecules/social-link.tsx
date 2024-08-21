import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import Card from "../atoms/card";

type SocialLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export default function SocialLink({
  href,
  children,
  target = "_blank",
  className = "p-2",
  ...rest
}: SocialLinkProps): ReactNode {
  return (
    <Card>
      <a className={className} href={href} target={target}>
        {children}
      </a>
    </Card>
  );
}

import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

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
    <a className={className} href={href} target={target} {...rest}>
      {children}
    </a>
  );
}

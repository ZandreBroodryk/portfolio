import { ReactNode } from "react";
import GitHub from "../icons/github";
import LinkedIn from "../icons/linked-in";
import Mail from "../icons/mail";
import SocialLink from "./social-link";

export default function Socials(): ReactNode {
  return (
    <div className="flex flex-1 flex-wrap gap-2 min-w-56 h-fit w-fit">
      <SocialLink href="https://www.linkedin.com/in/zandre-broodryk-dev/">
        <LinkedIn className="size-20" />
      </SocialLink>
      <SocialLink href="https://github.com/ZandreBroodryk">
        <GitHub className="size-20" />
      </SocialLink>
      <SocialLink href="mailto:z.broodryk@gmail.com">
        <Mail className="size-20" />
      </SocialLink>
    </div>
  );
}

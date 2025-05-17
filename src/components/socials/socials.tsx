import { ReactNode } from "react";
import GitHub from "../../icons/github";
import LinkedIn from "../../icons/linked-in";
import Mail from "../../icons/mail";
import SocialLink from "./social-link";

export default function Socials(): ReactNode {
  return (
    <div className="flex h-fit w-full flex-1 flex-wrap justify-around px-7 text-neutral-400">
      <SocialLink href="https://www.linkedin.com/in/zandre-broodryk-dev/">
        <LinkedIn className="size-4" />
      </SocialLink>
      <SocialLink href="https://github.com/ZandreBroodryk">
        <GitHub className="size-4" />
      </SocialLink>
      <SocialLink href="mailto:z.broodryk@gmail.com">
        <Mail className="size-4" />
      </SocialLink>
    </div>
  );
}

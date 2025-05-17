import Image from "next/image";
import SaFlag from "@/icons/sa-flag-round";

type ProfilePictureProps = {
  profilePictureUrl: string;
};

export default function ProfilePicture(props: ProfilePictureProps) {
  return (
    <div className="relative mx-auto my-2 flex size-33 items-center">
      <SaFlag className="size-33 rounded-3xl" viewBox="0 0 60 60" />
      <Image
        src={props.profilePictureUrl}
        height={256}
        width={256}
        alt="Me"
        className="absolute left-1/2 size-32 -translate-x-1/2 rounded-3xl"
      />
    </div>
  );
}

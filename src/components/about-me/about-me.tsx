import ContactInfo from "@/components/contact-info";
import Divider from "@/components/divider";
import Panel from "@/components/panel";
import Mail from "@/icons/mail";
import MapPin from "@/icons/map-pin";
import Phone from "@/icons/phone";
import ProfilePicture from "./profile-picture";
import Socials from "../socials/socials";

type AboutMeProps = {
  name: string;
  title: string;
  profilePictureUrl: string;
  email: string;
  phone: string;
  location: {
    name: string;
    coordinates: { latitude: number; longitude: number };
  };
};
export default function AboutMe(props: AboutMeProps) {
  return (
    <aside className="mx-auto my-6 sm:w-8/10 lg:fixed lg:top-12 lg:bottom-4 lg:left-4 lg:m-0 lg:w-72">
      <Panel>
        <div className="flex h-full flex-col gap-6 overflow-y-auto text-center">
          <div className="flex flex-row gap-6 lg:flex-col">
            <ProfilePicture profilePictureUrl={props.profilePictureUrl} />
            <div className="flex flex-col gap-6 text-center">
              <h1 className="font-mono text-2xl font-bold">{props.name}</h1>
              <div className="mx-auto size-fit rounded-lg bg-neutral-700 px-2 py-1 font-mono">
                <p>{props.title}</p>
              </div>
            </div>
          </div>
          <div className="flex h-full flex-col gap-6 text-center">
            <Divider />
            <div className="flex flex-row flex-wrap gap-6 lg:flex-col lg:flex-nowrap">
              <ContactInfo
                icon={<Mail className="size-5" />}
                content={props.email}
                title="email"
                link={`mailto:${props.email}`}
              />
              <ContactInfo
                icon={<Phone className="size-5" />}
                content={props.phone}
                title="phone"
                link={`tel:${props.phone}`}
              />
              <ContactInfo
                icon={<MapPin className="size-5" />}
                content={props.location.name}
                title="location"
                link={`https://www.google.com/maps/place/${props.location.coordinates.latitude},${props.location.coordinates.longitude}`}
              />
            </div>
            <Divider />
            <Socials />
          </div>
        </div>
      </Panel>
    </aside>
  );
}

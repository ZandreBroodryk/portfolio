import IconChip from "./icon-chip";

type ContactInfoProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
};

export default function ContactInfo({
  content,
  icon,
  title,
  link,
}: ContactInfoProps) {
  return (
    <div className="flex flex-row gap-4">
      <IconChip>{icon}</IconChip>
      <div className="flex w-full flex-col text-left">
        <h3 className="font-mono font-semibold text-neutral-400 uppercase">
          {title}
        </h3>
        <a className="font-sans text-sm" href={link}>
          {content}
        </a>
      </div>
    </div>
  );
}

import Image from "next/image";

type ProjectItemProps = {
  src: string;
  link: string;
  title: string;
  description: string;
};

export default function ProjectItem(props: ProjectItemProps) {
  return (
    <div className="flex w-fit flex-col gap-3 rounded-2xl bg-neutral-700 p-2">
      <a href={props.link} target="_blank">
        <Image
          width={280}
          height={160}
          src={props.src}
          alt={`${props.title} preview`}
          className="h-40 w-72 rounded-2xl"
        />
        <p className="mt-2 text-xl font-bold text-lime-500">{props.title}</p>
        <p className="text-white/50">{props.description}</p>
      </a>
    </div>
  );
}

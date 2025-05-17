type SectionHeadingProps = {
  text: string;
  id?: string;
};

export default function SectionHeading({ text, id }: SectionHeadingProps) {
  return (
    <h2 className="font-mono text-4xl font-extrabold" id={id}>
      {text}
      <div className="my-3 h-1 w-10 rounded-full bg-lime-300 opacity-95" />
    </h2>
  );
}

type TopSkillProps = {
  icon: React.ReactNode;
  text: string;
};
export default function TopSkill(props: TopSkillProps) {
  return (
    <div className="flex flex-row items-center gap-5 rounded-2xl border border-neutral-600 bg-neutral-800/70 p-5">
      {props.icon}
      <p className="font-sans">{props.text}</p>
    </div>
  );
}

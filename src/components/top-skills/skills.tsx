import Phone from "@/icons/phone";
import Computer from "@/icons/phone copy";
import SectionHeading from "../section-heading";
import TopSkill from "./top-skill";

export default function Skills() {
  return (
    <>
      <SectionHeading text="What I'm Doing" />
      <div className="flex flex-row gap-7 pb-7">
        <TopSkill
          icon={<Phone className="-my-2 size-10 text-lime-500" />}
          text="Mobile Development"
        />
        <TopSkill
          icon={<Computer className="-my-2 size-10 text-lime-500" />}
          text="Web Development"
        />
      </div>
    </>
  );
}

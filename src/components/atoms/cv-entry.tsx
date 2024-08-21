import { ReactNode } from "react";
import Employment from "../icons/employment";
import Education from "../icons/education";

type CvEntryProps = {
  type: "employment" | "education";
  startDate: number;
  endDate?: number;
  title: string;
  description: string;
  place: string;
};

export default function CvEntry(props: CvEntryProps): ReactNode {
  return (
    <div className="flex items-center gap-2">
      <div className="min-w-6">{props.type == "employment" ? <Employment /> : <Education />}</div>
      <div>
        <div className="flex items-center gap-2 justify-between">
          <h3>{props.title}</h3>
          <div>
            <p className="text-neutral-500">{props.place}</p>

            <p className="text-nowrap text-sm">
              {props.startDate} - {props.endDate ?? "Present"}
            </p>
          </div>
        </div>
        <p className="px-2 text-transparent transition-colors duration-700 hover:text-inherit">
          {props.description}
        </p>
      </div>
    </div>
  );
}

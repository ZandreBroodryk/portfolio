import Employment from "@/icons/employment";
import IconChip from "../icon-chip";
import Education from "@/icons/education";

export default function CV() {
  return (
    <>
      <div className="mb-4 flex flex-row items-center gap-3">
        <IconChip>
          <Employment />
        </IconChip>
        <h2 className="text-2xl font-bold">Experience</h2>
      </div>
      <ol className="ml-9.5 flex flex-col gap-5">
        <CvEntry
          title="Lead Software Engineer"
          description="Fullstack Software development of mobile app and admin portal"
          place="FuelX"
          startDate={2023}
        />
        <CvEntry
          title="Software Engineer"
          description="Went from Junior developer to Technical team lead for the C# back end development team"
          place="Codehesion"
          startDate={2021}
          endDate={2023}
        />
        <CvEntry
          title="Sales Consultant"
          description="Hazardous waste management and diversion from landfill"
          place="Averda"
          startDate={2020}
          endDate={2021}
        />
        <CvEntry
          title="Process Engineer"
          description="Specialised in the sizing and design of vibrating equipment"
          place="Vipro"
          startDate={2019}
          endDate={2020}
        />
      </ol>
      <div className="my-4 flex flex-row items-center gap-3">
        <IconChip>
          <Education />
        </IconChip>
        <h2 className="text-2xl font-bold">Education</h2>
      </div>
      <ol className="ml-9.5 flex flex-col gap-5">
        <CvEntry
          title="M.Eng Chemical Engineering"
          description="Reaction kinetics of the pyrolysis of urea phosphate"
          place="NWU"
          startDate={2017}
          endDate={2018}
        />
        <CvEntry
          title="B.Eng Chemical Engineering"
          description="undergraduate studies"
          place="NWU"
          startDate={2013}
          endDate={2016}
        />
      </ol>
    </>
  );
}

type CvEntryProps = {
  startDate: number;
  endDate?: number;
  title: string;
  description: string;
  place: string;
};
function CvEntry(props: CvEntryProps) {
  return (
    <li className="relative before:absolute before:-top-4 before:-left-3.25 before:h-[calc(100%+20px)] before:w-px before:bg-neutral-500 after:absolute after:top-2 after:-left-4.5 after:size-3 after:rounded-full after:border-2 after:border-lime-600 after:bg-lime-400 last:before:h-full">
      <div>
        <p className="text-xl font-bold">{props.title}</p>
        <p className="text-lime-400">{props.place}</p>
        <p className="text-sm text-nowrap">
          {props.startDate} - {props.endDate ?? "Present"}
        </p>
        <p className="text-neutral-400">{props.description}</p>
      </div>
    </li>
  );
}

import { ReactNode } from "react";
import Card from "../atoms/card";
import CvEntry from "../atoms/cv-entry";

export default function CvSummary(): ReactNode {
  return (
    <Card>
      <div className="m-2 flex h-96 min-w-56 max-w-96 flex-col gap-2 hover:h-fit">
        <h2>Experience & Training</h2>
        <p className="text-neutral-500">5 years experience</p>
        <CvEntry
          title="Lead Software Engineer"
          description="Fullstack Software development of mobile app and admin portal"
          place="FuelX"
          startDate={2023}
          type="employment"
        />
        <CvEntry
          title="Software Engineer"
          description="Went from Junior developer to Technical team lead for the C# back end development team"
          place="Codehesion"
          startDate={2021}
          endDate={2023}
          type="employment"
        />
        <CvEntry
          title="Sales Consultant"
          description="Hazardous waste management and diversion from landfill"
          place="Averda"
          startDate={2020}
          endDate={2021}
          type="employment"
        />
        <CvEntry
          title="Process Engineer"
          description="Specialised in the sizing and design of vibrating equipment"
          place="Vipro"
          startDate={2019}
          endDate={2020}
          type="employment"
        />
        <CvEntry
          title="M.Eng Chemical Engineering"
          description="Reaction kinetics of the pyrolysis of urea phosphate"
          place="NWU"
          startDate={2017}
          endDate={2018}
          type="education"
        />
        <CvEntry
          title="B.Eng Chemical Engineering"
          description="undergraduate studies"
          place="NWU"
          startDate={2013}
          endDate={2016}
          type="education"
        />
      </div>
    </Card>
  );
}

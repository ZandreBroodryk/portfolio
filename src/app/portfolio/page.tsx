import ProjectItem from "@/components/project-item";
import SectionHeading from "@/components/section-heading";

export default function BlogPage() {
  return (
    <>
      <SectionHeading text="Portfolio" />
      <div className="flex flex-row flex-wrap gap-4">
        <ProjectItem
          title="FuelX"
          description="Mobile app"
          link="https://www.fuelx.co.za"
          src="/fuelx-logo-smoke.png"
        />
        <ProjectItem
          title="HODL"
          description="Crypto trading platform"
          link="https://www.fhodlotc.com"
          src="/hodl-preview.png"
        />
        <ProjectItem
          title="Jacks Online"
          description="E-commerce platform for Jacks Paints"
          link="https://jacksonline.co.za"
          src="/jacks-paints-banner.jpg"
        />
      </div>
    </>
  );
}

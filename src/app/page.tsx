import AboutMe from "@/components/molecules/about-me";
import CvSummary from "@/components/molecules/cv-summary";
import MySkills from "@/components/molecules/my-skills";
import Socials from "@/components/molecules/socials";

export default function Home() {
  return (
    <main className="bg-cubes flex min-h-screen flex-col items-center justify-between bg-contain p-4 md:p-24">
      <div className="columns-1 gap-4 space-y-4 md:w-1/2 xl:columns-2">
        <AboutMe />
        <Socials />
        <MySkills />
        <CvSummary />
      </div>
    </main>
  );
}

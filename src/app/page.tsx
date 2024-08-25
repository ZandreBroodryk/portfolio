import AboutMe from "@/components/molecules/about-me";
import CvSummary from "@/components/molecules/cv-summary";
import MySkills from "@/components/molecules/my-skills";
import Socials from "@/components/molecules/socials";

export default function Home() {
  return (
    <main className="flex flex-col bg-cozy bg-cover bg-fixed bg-center">
      <div className="flex min-h-screen flex-col items-center justify-between p-4 pt-16 backdrop-blur-xs md:p-24">
        <div className="grid w-fit gap-4 lg:grid-cols-2">
          <AboutMe />
          <Socials />
          <MySkills />
          <div className="2xl:-mt-16">
            <CvSummary />
          </div>
        </div>
      </div>
    </main>
  );
}

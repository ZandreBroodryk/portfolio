import SectionHeading from "@/components/section-heading";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <>
      <SectionHeading text="Blog" />

      <p>I&apos;ll scribble some thoughts down here from time to time</p>
      <Link href={"/blog/code-snippet"} className="text-lime-500">
        Test
      </Link>
    </>
  );
}

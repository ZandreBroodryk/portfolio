import HamburgerMenu from "./hamburger-menu";
import Nav from "./nav/nav";
import Panel from "./panel";

export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <article className="mx-auto mb-4 sm:w-8/10 lg:fixed lg:top-12 lg:right-4 lg:bottom-4 lg:left-80 lg:m-0 lg:w-auto">
      <div className="fixed top-3 right-5 z-10 ml-auto block size-auto md:hidden">
        <HamburgerMenu>
          <Nav />
        </HamburgerMenu>
      </div>
      <Panel>
        <div className="flex flex-col md:relative lg:h-full">
          <div className="hidden md:block">
            <Nav />
          </div>
          <div className="overflow-y-auto">{children}</div>
        </div>
      </Panel>
    </article>
  );
}

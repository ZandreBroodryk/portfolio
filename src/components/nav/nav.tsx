import NavItem from "./nav-item";

export default function Nav() {
  return (
    <nav className="sticky top-0 right-0 -mt-6 -mr-6 ml-auto flex flex-col gap-4 rounded-bl-3xl bg-neutral-700 px-5 py-3 font-mono text-lime-300 md:absolute md:flex-row">
      <NavItem href="/">About</NavItem>
      <NavItem href="/experience">Experience</NavItem>
      <NavItem href="/portfolio">Portfolio</NavItem>
      <NavItem href="/blog">Blog</NavItem>
    </nav>
  );
}

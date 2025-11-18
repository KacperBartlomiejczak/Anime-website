import NavLinks from "./navLinks";
import NavHeading from "./navHeading";
import NavItems from "./navItems";

export default function Nav() {
  return (
    <nav className="w-screen p-2 flex items-center justify-center border-b-2 z-50 bg-white md:p-3 dark:bg-blue-950 lg:p-4 sticky top-0 ">
      <div className="container flex items-center justify-between ">
        <NavHeading />
        <NavLinks />
        <NavItems />
      </div>
    </nav>
  );
}

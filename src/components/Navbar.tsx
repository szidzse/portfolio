import Link from "next/link";
import ChatToggle from "@/components/ChatToggle";
import ThemeDropdown from "@/components/ThemeDropdown";

const navLinks = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "projects",
    href: "/projects",
  },
  {
    name: "blog",
    href: "/blog",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/75 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl px-8 py-6">
        <nav className="flex items-center justify-between">
          <ul className="flex gap-4 sm:gap-8">
            {navLinks.map((nav, id) => (
              <li key={id} className="link">
                <Link href={nav.href}>{nav.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 sm:gap-4">
            <ChatToggle />
            <ThemeDropdown />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import Link from "next/link";
import Logo from "./logo";

const items = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Projects",
    href: "#",
  },
  {
    title: "Eperience",
    href: "#",
  },
  {
    title: "Technologies",
    href: "#",
  },
];

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <nav>
          <ul className="flex gap-8">
            {items.map(({ title, href }) => (
              <li key={title}>
                <Link href={href}>
                  <span className="text-sm">{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

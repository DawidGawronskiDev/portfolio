import Link from "next/link";

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

export default function MainNavigation() {
  return (
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
  );
}

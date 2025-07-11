import NavLink from "./typography/nav-link";

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
            <NavLink href={href}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

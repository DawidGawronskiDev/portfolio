import Logo from "./logo";
import Paragraph from "./typography/paragraph";
import NavLink from "./typography/nav-link";
import Small from "./typography/small";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-[5fr_1fr_1fr] gap-8">
          <div className="flex flex-col items-start gap-4">
            <Logo />
            <Paragraph>Always learning. Always building.</Paragraph>
          </div>
          <nav>
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink href="#">Projects</NavLink>
              </li>
              <li>
                <NavLink href="#">Technologies</NavLink>
              </li>
              <li>
                <NavLink href="#">About Me</NavLink>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink href="#">GitHub</NavLink>
              </li>
              <li>
                <NavLink href="#">LinkedIn</NavLink>
              </li>
              <li>
                <NavLink href="#">Instagram</NavLink>
              </li>
              <li>
                <NavLink href="#">UpWork</NavLink>
              </li>
              <li>
                <NavLink href="#">Email</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Small className="text-center mt-8 text-muted-foreground">
          Built & Designed by Dawid Gawronski © {new Date().getFullYear()}
        </Small>
      </div>
    </footer>
  );
}

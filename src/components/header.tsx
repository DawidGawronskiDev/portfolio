import Logo from "./logo";
import MainNavigation from "./main-navigation";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <MainNavigation />
      </div>
    </header>
  );
}

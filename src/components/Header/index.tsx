import { Logo } from "../Logo";
import { NavBar } from "../NavBar";

export function Header() {
  return (
    <header className="w-full py-4 px-6 bg-gray-light-200">
      <div className="flex justify-between items-center">
        <Logo />
        <NavBar />
      </div>
    </header>
  );
}

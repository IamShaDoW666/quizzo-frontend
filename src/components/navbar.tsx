"use client"
import { ModeToggle } from "./ui/toggle-theme";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 shadow px-4 py-2 backdrop-blur">
      <div className="px-28 flex justify-between items-center">
        <h1>Quizzo</h1>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
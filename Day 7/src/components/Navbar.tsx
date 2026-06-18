import { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

type NavbarProps = {
  onNavigate: (page: string) => void;
  activePage: string;
};

function Navbar({ onNavigate, activePage }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="brand">SkillHub</div>
      <div className="nav-links">
        <button className={activePage === "home" ? "active" : ""} onClick={() => onNavigate("home")}>Home</button>
        <div className="courses-menu">
          <button type="button" onClick={() => setOpen(!open)}>
            Courses ▼
          </button>
          {open && (
            <div className="dropdown">
              <button onClick={() => onNavigate("courses")}>React</button>
              <button onClick={() => onNavigate("courses")}>Java</button>
              <button onClick={() => onNavigate("courses")}>Node JS</button>
            </div>
          )}
        </div>
        <button className={activePage === "contact" ? "active" : ""} onClick={() => onNavigate("contact")}>Contact</button>
      </div>
      <button className="theme-toggle" onClick={() => setDark(!dark)}>
        {dark ? "Light" : "Dark"}
      </button>
    </nav>
  );
}

export default Navbar;

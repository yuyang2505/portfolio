import "./Navbar.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <ul className="navMenu">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li>
          <img src={themeIcon} onClick={toggleTheme} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

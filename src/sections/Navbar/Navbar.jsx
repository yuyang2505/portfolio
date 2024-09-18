import "./Navbar.css";
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import { useTheme } from "../../common/ThemeContext";


const Navbar = () => {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === "light" ? sun : moon;


  return (
    <div className="navbar">
      <ul className="navMenu">
        <li>Home</li>
        <li>Skills</li>
        <li>Project</li>
        <li><img src={themeIcon} onClick={toggleTheme} /></li>
      </ul>
    </div>
  );
};

export default Navbar;

import './Hero.css'
import linkedinLight from "../../assets/linkedin-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import Resume from "../../assets/Resume.pdf"
import {useTheme} from "../../common/ThemeContext"

const Hero = () => {
    const {theme, toggleTheme} = useTheme();
    const githubIcon = theme === "light" ? githubLight: githubDark;
    const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className="heroContainer">
        <div className="info">
            <h1>Ong Yu Yang</h1>
            <h2>Computer Science Undergraduate</h2>
            <span>
                <a href="https://linkedin.com/in/yuyangong" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>
                <a href="https://github.com/yuyang2505" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Github Icon" />
                </a>
            </span>
            <p className="description">
                Passion for fullstack developement
            </p>
            <a href={Resume} download>
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero
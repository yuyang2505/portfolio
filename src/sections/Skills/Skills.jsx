import './Skills.css'
import SkillCard from '../../common/SkillCard'
import htmlDark from "../../assets/html-dark.svg"
import htmlLight from "../../assets/html-light.svg"
import cssDark from "../../assets/css-dark.svg"
import cssLight from "../../assets/css-light.svg"
import jsDark from "../../assets/js-dark.svg"
import jsLight from "../../assets/js-light.svg"
import reactDark from "../../assets/react-dark.svg"
import reactLight from "../../assets/react-light.svg"
import pythonDark from "../../assets/python-dark.svg"
import pythonLight from "../../assets/python-light.svg"
import flaskDark from "../../assets/flask-light.svg"
import flaskLight from "../../assets/flask-dark.svg"
import javaDark from "../../assets/java-dark.svg"
import javaLight from "../../assets/java-light.svg"
import springDark from "../../assets/spring-dark.svg"
import springLight from "../../assets/spring-light.svg"
import mongoDark from "../../assets/mongo-dark.svg"
import mongoLight from "../../assets/mongo-light.svg"
import { useTheme } from '../../common/ThemeContext'

const Skills = () => {
    const {theme, toggleTheme} = useTheme();
    const htmlIcon = theme === "light" ? htmlLight : htmlDark;
    const cssIcon = theme === "light" ? cssLight : cssDark;
    const jsIcon = theme === "light" ? jsLight : jsDark;
    const reactIcon = theme === "light" ? reactLight : reactDark;
    const pythonIcon = theme === "light" ? pythonLight : pythonDark;
    const flaskIcon = theme === "light" ? flaskLight : flaskDark;
    const javaIcon = theme === "light" ? javaLight : javaDark;
    const springIcon = theme === "light" ? springLight : springDark;
    const mongoIcon = theme === "light" ? mongoLight : mongoDark;
  return (
    <section id="skills" className="skillsContainer">
        <h1 className="sectionTitle">Skills</h1>
        <div className="skillList">
            <SkillCard src={htmlIcon} />
            <SkillCard src={cssIcon} />
            <SkillCard src={jsIcon} />
            <SkillCard src={reactIcon} />
            <SkillCard src={pythonIcon} />
            <SkillCard src={flaskIcon} />
            <SkillCard src={javaIcon} />
            <SkillCard src={springIcon} />
            <SkillCard src={mongoIcon} />
        </div>
    </section>
  )
}

export default Skills
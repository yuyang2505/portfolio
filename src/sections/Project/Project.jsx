import "./Project.css";
import ProjectCard from "../../common/ProjectCard";

const Project = () => {
  return (
    <section id="projects" className="projectContainer">
      <h1 className="sectionTitle">Projects</h1>
      <div className="projectList">
        <ProjectCard
          title="Real Estate Web App"
          description="Web app made using flask"
          link="https://github.com/yuyang2505/Real-Estate-Web"
        />
        <ProjectCard
          title="Facial Expression Recognition"
          description="Trained model to detect facial expression"
          link="https://github.com/yuyang2505/Facial_Expression_Recognition"
        />
        <ProjectCard
          title="Personal Portfolio Website"
          description="Built with React and CSS"
          link="https://github.com/yuyang2505/portfolio"
        />
      </div>
    </section>
  );
};

export default Project;

import PropTypes from 'prop-types'

function ProjectCard({src, title, description, link}) {
  return (
    <span className="projectCard">
        <img src={src} />
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button>Github Link</button>
        </a>
        
    </span>
  )
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
}

export default ProjectCard
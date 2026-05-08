import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="Projects" title="Selected builds and systems" />
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

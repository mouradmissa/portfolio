import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

function Projects({ projects }) {
  const { t } = useLanguage()

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow={t.projects.eyebrow} title={t.projects.title} />
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

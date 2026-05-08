import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import Scene from '../three/Scene'

function Projects3D({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle eyebrow="Projects" title="Built for impact" />
        <div className="split-3d">
          <div className="glass-panel canvas-panel">
            <Scene variant="projects" className="scene-host section-scene" />
          </div>
          <div className="cards-stack">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                className="card glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <h3>{project.name}</h3>
                <ul className="bullet-list">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className="tag-list">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects3D

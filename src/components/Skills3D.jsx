import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import Scene from '../three/Scene'

function Skills3D({ skillGroups }) {
  const spotlight = [
    'React',
    'Node.js',
    'NestJS',
    'Python',
    'Machine Learning',
    'Docker',
    'Jenkins',
    'Kubernetes',
    'MongoDB',
    'MySQL',
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle eyebrow="Skills" title="3D capability matrix" />
        <div className="split-3d">
          <div className="glass-panel canvas-panel">
            <Scene variant="skills" className="scene-host section-scene" />
          </div>
          <div className="cards-stack">
            <motion.article
              className="card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h3>Core Stack</h3>
              <ul className="tag-list">
                {spotlight.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.article>
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                className="card glass-panel"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <h3>{group.title}</h3>
                <ul className="tag-list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
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

export default Skills3D

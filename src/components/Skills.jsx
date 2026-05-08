import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { motion } from 'framer-motion'

function Skills({ skillGroups }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="Skills" title="Technical capabilities" />
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="card glass"
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
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
    </section>
  )
}

export default Skills

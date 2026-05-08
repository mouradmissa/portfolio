import { motion } from 'framer-motion'

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="card glass project-card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.015 }}
    >
      <h3>{project.name}</h3>
      <ul className="bullet-list">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <ul className="tag-list">
        {project.technologies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.article>
  )
}

export default ProjectCard

import { motion } from 'framer-motion'

function ExperienceCard({ item, index }) {
  return (
    <motion.article
      className="card glass experience-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div className="experience-head">
        <h3>{item.role}</h3>
        <span>{item.period}</span>
      </div>
      <p className="experience-company">{item.company}</p>
      <ul className="bullet-list">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <ul className="tag-list">
        {item.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </motion.article>
  )
}

export default ExperienceCard

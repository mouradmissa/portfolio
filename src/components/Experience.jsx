import SectionTitle from './SectionTitle'
import ExperienceCard from './ExperienceCard'
import Reveal from './Reveal'

function Experience({ experiences }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="Experience" title="Professional internships" />
        </Reveal>
        <div className="experience-grid">
          {experiences.map((item, index) => (
            <ExperienceCard key={`${item.company}-${item.period}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

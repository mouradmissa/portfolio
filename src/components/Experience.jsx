import SectionTitle from './SectionTitle'
import ExperienceCard from './ExperienceCard'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

function Experience({ experiences }) {
  const { t } = useLanguage()

  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow={t.experience.eyebrow} title={t.experience.title} />
        </Reveal>
        <div className="experience-grid">
          {experiences.map((item, index) => (
            <ExperienceCard
              key={`${item.company}-${item.period}-${item.role}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

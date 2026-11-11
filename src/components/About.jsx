import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

function About() {
  const { t } = useLanguage()
  const { personalInfo, about } = t

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow={about.eyebrow} title={about.title} />
        </Reveal>
        <div className="about-layout">
          <Reveal className="card glass" delay={0.06}>
            <p className="about-summary">{personalInfo.summary}</p>
            <ul className="profile-list about-profile-list">
              {personalInfo.profile.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Reveal>
          <div className="meta-grid">
            <Reveal className="card glass meta-card" delay={0.1}>
              <h3>{about.languagesTitle}</h3>
              <ul className="meta-list">
                {personalInfo.languages.map((langItem) => (
                  <li key={langItem.name}>
                    <strong>{langItem.name}</strong> — {langItem.level}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="card glass meta-card" delay={0.14}>
              <h3>{about.certificationTitle}</h3>
              <ul className="meta-list">
                <li>
                  <strong>{personalInfo.certification.name}</strong>
                </li>
                <li>{personalInfo.certification.detail}</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

function Contact() {
  const { t } = useLanguage()
  const { personalInfo, contact } = t

  return (
    <section id="contact" className="section">
      <div className="container contact-content">
        <Reveal>
          <SectionTitle eyebrow={contact.eyebrow} title={contact.title} />
        </Reveal>
        <Reveal className="card glass contact-card" delay={0.08}>
          <ul className="contact-list">
            <li>
              <span>{contact.phone}</span>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
            </li>
            <li>
              <span>{contact.email}</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </li>
            <li>
              <span>{contact.location}</span>
              <p>{personalInfo.location}</p>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact

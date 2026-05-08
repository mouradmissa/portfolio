import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { personalInfo } from '../data/portfolioData'

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-content">
        <Reveal>
          <SectionTitle eyebrow="Contact" title="Let us build something impactful" />
        </Reveal>
        <Reveal className="card glass contact-card" delay={0.08}>
          <ul className="contact-list">
            <li>
              <span>Phone</span>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact

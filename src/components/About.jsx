import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { personalInfo } from '../data/portfolioData'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="Profile" title="Engineering student with product mindset" />
        </Reveal>
        <Reveal className="card glass" delay={0.08}>
          <ul className="profile-list">
            {personalInfo.profile.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default About

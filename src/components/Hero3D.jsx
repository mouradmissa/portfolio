import { motion } from 'framer-motion'
import Scene from '../three/Scene'
import { personalInfo } from '../data/portfolioData'
import profilePhoto from '../assets/photodeprofile.png'

function Hero3D() {
  return (
    <section id="home" className="section hero3d">
      <div className="hero-gradient" />
      <div className="container hero3d-grid">
        <motion.div
          className="hero3d-text glass-panel"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero-kicker">Premium Interactive Developer Portfolio</p>
          <h1>
            <span className="typing-line">{personalInfo.name}</span>
          </h1>
          <p className="hero-intro">
            Student in Computer Engineering (ESPRIT) building modern full-stack
            products with immersive UI, strong backend systems, and AI-driven features.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#projects">
              Explore Projects
            </a>
            <a className="btn-ghost" href="#contact">
              Contact
            </a>
          </div>
          <div className="hero-profile">
            <div className="hero-profile-photo-wrap">
              <img src={profilePhoto} alt={personalInfo.name} className="hero-profile-photo" />
            </div>
            <div>
              <p className="hero-profile-name">{personalInfo.name}</p>
              <p className="hero-profile-role">{personalInfo.title}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero3d-canvas glass-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Scene variant="hero" className="scene-host" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero3D

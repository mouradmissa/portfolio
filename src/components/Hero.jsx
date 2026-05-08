import { motion } from 'framer-motion'
import ProfileCard from './ProfileCard'

function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-gradient" />
      <div className="container hero-content">
        <div className="hero-text hero-text-top glass-panel">
          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <span className="typing-line">MISSAOUI MOURAD</span>
          </motion.h1>
        </div>

        <ProfileCard />

        <div className="hero-text hero-text-bottom glass-panel">
          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
          >
            Computer Engineering Student at ESPRIT building full-stack products
            with clean architecture, strong UX, and practical real-world impact.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

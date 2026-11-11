import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

function AiPath() {
  const { t } = useLanguage()
  const ai = t.aiPath

  return (
    <section id="ai-path" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow={ai.eyebrow} title={ai.title} />
        </Reveal>
        <Reveal className="ai-intro" delay={0.05}>
          <p>{ai.intro}</p>
        </Reveal>

        <h3 className="ai-subtitle">{ai.appsTitle}</h3>
        <Reveal className="ai-apps" delay={0.06}>
          {ai.apps.map((app) => (
            <a
              key={app.href}
              href={app.href}
              target="_blank"
              rel="noreferrer"
              className="ai-link ai-app-link"
            >
              {app.name}
            </a>
          ))}
        </Reveal>

        <h3 className="ai-subtitle">{ai.typesTitle}</h3>
        <div className="ai-types-grid">
          {ai.types.map((type, index) => (
            <motion.article
              key={type.title}
              className="card glass ai-type-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h4>{type.title}</h4>
              <p>{type.description}</p>
            </motion.article>
          ))}
        </div>

        <h3 className="ai-subtitle">{ai.stepsTitle}</h3>
        <div className="ai-steps">
          {ai.steps.map((item, index) => (
            <motion.article
              key={item.step}
              className="card glass ai-step-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
            >
              <div className="ai-step-head">
                <span className="ai-step-number">{item.step}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p className="ai-step-project">{item.project}</p>
                </div>
              </div>
              <ul className="bullet-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {item.links?.length ? (
                <div className="ai-links">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ai-link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </motion.article>
          ))}
        </div>

        <div className="ai-models-grid">
          <Reveal className="card glass" delay={0.05}>
            <h3>{ai.customTitle}</h3>
            <ul className="ai-model-list">
              {ai.customModels.map((model) => (
                <li key={model.name}>
                  <strong>{model.name}</strong>
                  <span>{model.detail}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="card glass" delay={0.1}>
            <h3>{ai.integratedTitle}</h3>
            <ul className="ai-model-list">
              {ai.integratedModels.map((model) => (
                <li key={model.name}>
                  <strong>{model.name}</strong>
                  <span>{model.detail}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="card glass ai-takeaway" delay={0.08}>
          <h3>{ai.takeawayTitle}</h3>
          <ul className="bullet-list">
            {ai.takeaways.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default AiPath

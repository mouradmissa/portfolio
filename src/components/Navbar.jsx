import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

function Navbar() {
  const { t, lang, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [narrow, setNarrow] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)')
    const sync = () => setNarrow(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 761px)').matches) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-content">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          M.
        </a>
        <div className="nav-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={`lang-btn ${lang === 'fr' ? 'lang-btn-active' : ''}`}
              onClick={() => setLang('fr')}
              aria-pressed={lang === 'fr'}
            >
              FR
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'lang-btn-active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className={`nav-toggle ${menuOpen ? 'nav-toggle-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="main-nav-panel"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? t.menuClose : t.menuOpen}</span>
            <span className="nav-toggle-bar" aria-hidden />
            <span className="nav-toggle-bar" aria-hidden />
            <span className="nav-toggle-bar" aria-hidden />
          </button>
        </div>
        {menuOpen ? (
          <button
            type="button"
            className="nav-backdrop"
            aria-label={t.menuClose}
            onClick={() => setMenuOpen(false)}
          />
        ) : null}
        <nav
          id="main-nav-panel"
          className={`nav-panel ${menuOpen ? 'nav-panel-open' : ''}`}
          aria-label={t.navAria}
          inert={narrow && !menuOpen}
        >
          <ul className="nav-links">
            {t.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLanguage } from './i18n/LanguageContext'

function App() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience experiences={t.experiences} />
        <Projects projects={t.projects} />
        <Skills skillGroups={t.skillGroups} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

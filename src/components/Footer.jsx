import { useLanguage } from '../i18n/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <p>{t.footer.replace('{year}', String(new Date().getFullYear()))}</p>
      </div>
    </footer>
  )
}

export default Footer

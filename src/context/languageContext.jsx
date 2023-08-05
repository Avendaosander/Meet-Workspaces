import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext()

export function LanguageProvider ({ children }) {
	const {i18n} = useTranslation()
   const [language, setLanguage] = useState('es')

   useEffect(() => {
      const languageLS = localStorage.getItem('Language')
      if (languageLS) {
         const languageParse = JSON.parse(languageLS)
         setLanguage(languageParse)
			i18n.changeLanguage(languageParse)
      } else {
         if (navigator && navigator.language) {
            setLanguage(navigator.language);
            localStorage.setItem('Language', JSON.stringify(navigator.language))
            i18n.changeLanguage(navigator.language)
            return
         }
         localStorage.setItem('Language', JSON.stringify('es'))
      }
   }, [i18n, language])

   return (
      <LanguageContext.Provider value={{
         language,
         setLanguage
      }}>
         {children}
      </LanguageContext.Provider>
   )
}

LanguageProvider.propTypes = {
   children: PropTypes.node.isRequired
}

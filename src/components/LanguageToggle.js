import React, {useContext} from 'react'
import {LanguageContext} from './contexts/languageContext'

/**
 * Toggles the language of the app
 *  
 */

export default function LanguageToggle() {

    const [language, setLanguage] = useContext(LanguageContext);

    const toggle = (e) => {
      e.currentTarget.textContent === "english"
        ? setLanguage('en')
        : setLanguage('ar')
    }

    return (
        <div>
            <button
              onClick={(e) => toggle(e)}
              className={language === "en" ? 'active' : ''}>
              english
            </button>

            <button
              onClick={(e) => toggle(e)}
              className={language === "ar" ? 'active' : ''}>
              عربى
            </button>
        </div>
    )
}

import React, {useContext} from 'react'
import {LanguageContext} from './contexts/languageContext'
import { ThemeContext } from './contexts/theme'

export default function LanguageToggle() {

    const [language, setLanguage] = useContext(LanguageContext);

    const toggle = (e) => {
      e.currentTarget.textContent === "english"
        ? setLanguage('en')
        : setLanguage('ar')
    }

    // Toggle Themes (Dark, Light)
    const [{isDark} ] = useContext(ThemeContext);

    return (
        <div>
            <button
              onClick={(e) => toggle(e)}
              className={
                isDark 
                  ? language === "en" ? 'active dark' : 'dark'
                  : language === "en" ? 'active light' : 'light'
                }>
              english
            </button>

            <button
              onClick={(e) => toggle(e)}
              className={
                isDark 
                  ? language === "ar" ? 'active dark' : 'dark'
                  : language === "ar" ? 'active light' : 'light'
                }>
              عربى
            </button>
        </div>
    )
}

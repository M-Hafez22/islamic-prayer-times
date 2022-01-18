import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/languageContext'
import { ThemeContext } from '../contexts/theme'

export default function LanguageToggle() {

  const [language, setLanguage] = useContext(LanguageContext);

  const toggle = (e) => {
    // console.log(e.currentTarget.value)
    setLanguage(e.currentTarget.value)
  }

  // Toggle Themes (Dark, Light)
  const [{ isDark }] = useContext(ThemeContext);

  return (
    <div>
      <input 
      type="radio" 
      value='en' 
      className='radio-item' 
      checked={language === "en"} 
      onChange={(e) => toggle(e)} /> english

      <input 
      type="radio" 
      value='ar' 
      className='radio-item' 
      checked={language === "ar"} 
      onChange={(e) => toggle(e)} /> عربى

    </div>
  )
}

import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/languageContext'
import { ThemeContext } from '../contexts/theme'
import RadioButton from './RadioButton'

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
      <div className='radio'>
        <RadioButton
          label="english"
          value={'en'}
          checked={language === "en"}
          onChange={(e) => toggle(e)}
        />
        <RadioButton
          label="عربى"
          value={'ar'}
          checked={language === "ar"}
          onChange={(e) => toggle(e)}
        />
      </div>

    </div>
  )
}

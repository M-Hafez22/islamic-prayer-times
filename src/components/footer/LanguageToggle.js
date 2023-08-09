import React, { useContext, useEffect } from 'react'
import { LanguageContext } from '../contexts/languageContext'
import RadioButton from './RadioButton'

export default function LanguageToggle() {

  const [language, setLanguage] = useContext(LanguageContext);

  const toggle = (e) => {
    setLanguage(e.currentTarget.value)
    localStorage.setItem("language", (e.currentTarget.value))
  }

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

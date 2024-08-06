import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/languageContext'
import RadioButton from './RadioButton'

export default function LanguageToggle() {

  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('SomeComponent must be used within a LanguageProvider');
  }

  const { language, setLanguage } = context;

  const toggle = (e: { currentTarget: { value: string; }; }) => {
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
          onChange={(e: { currentTarget: { value: string; }; }) => toggle(e)}
        />
        <RadioButton
          label="عربى"
          value={'ar'}
          checked={language === "ar"}
          onChange={(e: { currentTarget: { value: string; }; }) => toggle(e)}
        />
      </div>

    </div>
  )
}

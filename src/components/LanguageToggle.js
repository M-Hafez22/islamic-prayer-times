import React, {useContext} from 'react'
import {LanguageContext} from './contexts/languageContext'

export default function LanguageToggle() {
    const [language, setLanguage] = useContext(LanguageContext);
    const toggle = (e) => {
        e.currentTarget.textContent === "english" ? 
            setLanguage('en') : 
            setLanguage('ar')
    }
    const active = "teal"
    return (
        <div>
            <button onClick={(e) => toggle(e)}
                style={{color : language === "en" && active}}>english</button>
            <button onClick={(e) => toggle(e)}
            style={{color : language === "ar" && active}}>عربى</button>
        </div>
    )
}

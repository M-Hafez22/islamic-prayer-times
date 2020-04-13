import React, {useContext} from 'react'
import {LanguageContext} from './contexts/languageContext'

export default function LanguageToggle() {
    const [language, setLanguage] = useContext(LanguageContext);
    const toggle = (e) => {
        e.currentTarget.textContent === "english" ? 
            setLanguage('en') : 
            setLanguage('ar')
    }
    return (
        <div>
            <button onClick={(e) => toggle(e)}>english</button>
            <button onClick={(e) => toggle(e)}>عربى</button>
        </div>
    )
}

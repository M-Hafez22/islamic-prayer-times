import React, {useContext} from 'react'
import { useCurrentDate } from './hooks/useCurrentDate'
import {LanguageContext} from './contexts/languageContext'

export default function Clock() {

    const [language, setLanguage] = useContext(LanguageContext);

    // Get the current time
    const date = useCurrentDate();
    // Add zero to numbers under 10
    const addZero = (n) => (n < 10 ? `0${n}` : n);
    // Determine night or day 
    const dayOrNight = {
        en : date.getHours() < 12 ? "AM" : "PM",
        ar: date.getHours() < 12 ? "صباحاً" : "مساءً"
    };
        
    return (
        <div className='clock'>
            <h2> 
                {addZero(date.getHours())}:
                {addZero(date.getMinutes())}:
                {addZero(date.getSeconds())}
            </h2>
                <span>{language === "en" ? dayOrNight.en : dayOrNight.ar}</span>
        </div>
    )
}

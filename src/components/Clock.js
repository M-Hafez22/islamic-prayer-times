import React, {useContext} from 'react'
import { useCurrentDate } from './hooks/useCurrentDate'
import {LanguageContext} from './contexts/languageContext'
import {to12Format, addLeadingZero} from './helper/formatTime'

/**
 * Display the time
 */

export default function Clock() {

    const [language] = useContext(LanguageContext);

    // Get the current time
    const date = useCurrentDate();
    const currentTime = `${date.getHours()}:${date.getMinutes()}`;

    // Determine night or day
    const dayOrNight = {
        en : date.getHours() < 12 ? "AM" : "PM",
        ar: date.getHours() < 12 ? "صباحاً" : "مساءً"
    };

    return (
        <div
          className='clock'
          style={{flexDirection: language === "ar" && " row-reverse"}}>

          <h2>
            {to12Format(currentTime)}
            <span>
              :{addLeadingZero(date.getSeconds())}
            </span>
          </h2>
          
          <span>{dayOrNight[language]}</span>

        </div>
    )
}

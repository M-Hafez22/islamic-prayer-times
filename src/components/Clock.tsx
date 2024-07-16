import React, { useContext } from 'react'
import { useCurrentDate } from './hooks/useCurrentDate'
import { LanguageContext } from './contexts/languageContext'
import { to12Format, addLeadingZero } from './helper/formatTime'

export default function Clock() {

  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('SomeComponent must be used within a LanguageProvider');
  }

  const { language } = context;

  // Get the current time
  const date = useCurrentDate();
  const currentTime = `${date.getHours()}:${date.getMinutes()}`;

  // Determine night or day
  const dayOrNight: { [key: string]: string } = {
    en: date.getHours() < 12 ? "AM" : "PM",
    ar: date.getHours() < 12 ? "صباحاً" : "مساءً"
  };

  return (
    <div
      className='clock'
      style={{ flexDirection: language === "ar" ? "row-reverse" : "row"}}>

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

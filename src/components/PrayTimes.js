import React, {useContext} from 'react'
import PrayCard from './PrayCard'
import RemainTime from './RemainTime'
import {FetchedDataContext} from './contexts/FetchedDataContext'
import {LanguageContext} from './contexts/languageContext'
import useNextPrayer from './hooks/useNextPray'


function PrayTimes() {

    // Contexts 
    const [language] = useContext(LanguageContext);
    const [loaded, data] = useContext(FetchedDataContext);

    // Get Pray Time
    const timings = loaded && data.timings;

    // Remove additional data
    const additional = ['Sunrise', 'Imsak','Midnight', 'Sunset'];
    additional.forEach(i => delete timings[i]);

    // Get Prayer Names
    const prayer_en =  Object.keys(timings);
    const prayer_ar = [ 'الفجر', 'الظهر','العصر','المغرب', 'العشاء'];
    const prayerNames = language === "en" ? prayer_en : prayer_ar;
    
    // Get Prayer Times 
    const prayTimes =  Object.values(timings);
    const  [remaineTime, nextPray] = useNextPrayer(prayTimes);

    // Prayer Card 
    const prayerTimeList = prayerNames.map((p, i) =>  ( 
        <PrayCard 
            key={p}
            active={i === nextPray ? "active" : ""}  
            name={p} 
            time={prayTimes[i]}
        /> 
    ))

    // Remain time content
    const text = language === "en" ? 'Remaining time to' : 'الوقت المتبقى على صلاة ' ;
    const prayer = prayerNames[nextPray];

    return (
        <div className="prayTime">
            <h1>{language === "en" ? "Prayer Time" : "أوقات الصلاة"}</h1>
            <ul>{ loaded &&   prayerTimeList }</ul>
            <RemainTime text={text}  prayer={prayer} time={loaded && remaineTime}/>
        </div>
    )
}
export default PrayTimes;
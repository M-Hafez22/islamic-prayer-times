import React, {useContext} from 'react'
import PrayCard from './PrayCard'
import {FetchedDataContext} from './contexts/FetchedDataContext'
import {LanguageContext} from './contexts/languageContext'
import useNextPrayer from './hooks/useNextPray'


function PrayTimes() {
    console.log("rendring...")
    const [language] = useContext(LanguageContext);
    
    const [loaded, data] = useContext(FetchedDataContext);
    // Get Pray Time
    const timings = loaded && data.timings;

    // Remove additional data
    const additional = ['Sunrise', 'Imsak','Midnight', 'Sunset'];
    additional.forEach(i => delete timings[i]);

    
    const prayNames =  Object.keys(timings);
    const prayTimes =  Object.values(timings);
    const  nextPray = useNextPrayer(prayTimes);
    const prayTimeList = prayNames.map((p, i) =>  ( <PrayCard key={p} name={p} time={prayTimes[i]}/> ))
    
    return (
        <div className="prayTime">
            <h1>{language === "en" ? "Prayer Timings" : "أوقات الصلاة"}</h1>
            <ul>{ loaded &&   prayTimeList }</ul>
    <h2>nextPray: {nextPray}</h2>
        </div>
    )
}

export default PrayTimes;

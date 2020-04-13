import React, {useContext} from 'react'
import PrayCard from './PrayCard'
import {FetchedDataContext} from './contexts/FetchedDataContext'
import {LanguageContext} from './contexts/languageContext'


function PrayTimes() {
    console.log("rendring...")
    const [language] = useContext(LanguageContext);

    const [loaded, data] = useContext(FetchedDataContext);
    // Get Pray Time
    const timings = loaded && data.timings;
    const prayNames =  Object.keys(timings);
    const prayTimes =  Object.values(timings);
    const prayTimeList = prayNames.map((p, i) =>  (
        <PrayCard  key={p} name={p} time={prayTimes[i]}/>
    ))

    return (
        <div>
            <h1>{language === "en" ? "Prayer Timings" : "أوقات الصلاة"}</h1>

            { loaded &&   prayTimeList }
        </div>
    )
}

export default PrayTimes;
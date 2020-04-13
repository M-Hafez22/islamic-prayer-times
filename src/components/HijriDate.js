import React, {useContext} from 'react'
import {FetchedDataContext} from './contexts/FetchedDataContext'
import {LanguageContext} from './contexts/languageContext'


export default function HijriDate() {

    const [loaded, data] = useContext(FetchedDataContext);
    const [language] = useContext(LanguageContext);
    // Get Hijri Date
    const gregorian = loaded && data.date.gregorian;
    const hijri = loaded && data.date.hijri;

    return loaded &&(
        <div>
            {language === "en" ? 
                <h2>{gregorian.weekday.en} {hijri.day} {hijri.month.en} {hijri.year}</h2> :
                <h2>{hijri.weekday.ar} {hijri.day} {hijri.month.ar} {hijri.year}</h2>}
        </div>
    )
}

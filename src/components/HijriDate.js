import React, {useContext} from 'react'
import {FetchedDataContext} from './contexts/FetchedDataContext'

export default function HijriDate() {

    const [loaded, data] = useContext(FetchedDataContext);
    // Get Hijri Date
    const gregorian = loaded && data.date.gregorian;
    const hijri = loaded && data.date.hijri;

    return loaded &&(
        <div>
            <h2>{gregorian.weekday.en} {hijri.day} {hijri.month.en} {hijri.year}</h2>
        </div>
    )
}

import React, {useContext} from 'react'
import {FetchedDataContext} from './FetchedDataContext'

export default function HijriDate() {

    const [loaded, data] = useContext(FetchedDataContext);
    // Get Hijri Date
    const hijri = loaded && data.date.hijri;
    return loaded &&(
        <div>
            <h2>{hijri.weekday.ar} {hijri.day} {hijri.month.ar} {hijri.year}</h2>
        </div>
    )
}

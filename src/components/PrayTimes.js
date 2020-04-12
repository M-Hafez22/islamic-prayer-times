import React from 'react'
import {useFetch} from './useFetch'
import HijriDate from './HijriDate'
import PrayCard from './PrayCard'

export default function PrayTimes() {
    // Get Data
    const [loaded, data] = useFetch(`http://api.aladhan.com/v1/timings/12-4-2020?latitude=35.851709500000005&longitude=55.924600499999997&method=5`);

    // Get Hijri Date
    const hijri = loaded && data.date.hijri;

    // Get Pray Time
    const timings = loaded && data.timings;
    const PrayNames =  Object.keys(timings);
    const PrayTimes =  Object.values(timings);
    const prayTimeList = PrayTimes.map((p, i) => (<PrayCard  key={p} name={PrayNames[i]} time={p}/>))

    return (
        <div>
            <h1>أوقات الصلاة</h1>
            {loaded &&  <HijriDate hijri={hijri}/>  }
            {loaded &&   prayTimeList}
        </div>
    )
}

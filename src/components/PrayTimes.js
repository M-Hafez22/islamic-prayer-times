import React from 'react'
import {useFetch} from './useFetch'
import HijriDate from './HijriDate'
import PrayCard from './PrayCard'
import {useLoaction} from './useLocation';

export default function PrayTimes() {

    // Get Local coords
    const [latitude, longitude] = useLoaction();
    // Get Data
    const [loaded, data] = useFetch(`http://api.aladhan.com/v1/timings/12-4-2020?latitude=${latitude}&longitude=${longitude}&method=5`);

    // Get Hijri Date
    const hijri = loaded && data.date.hijri;

    // Get Pray Time
    const timings = loaded && data.timings;
    const prayNames =  Object.keys(timings);
    console.log(prayNames);
    const prayTimes =  Object.values(timings);
    const prayTimeList = prayNames.map((p, i) =>  (<PrayCard  key={p} name={p} time={prayTimes[i]}/>))

    return (
        <div>
            <h1>أوقات الصلاة</h1>
            {loaded &&  <HijriDate hijri={hijri}/>  }
            {loaded &&   prayTimeList}
        </div>
    )
}

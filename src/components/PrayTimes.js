import React from 'react'
import {useFetch} from './useFetch'
import HijriDate from './HijriDate'

export default function PrayTimes() {

    const [loaded, data] = useFetch(`http://api.aladhan.com/v1/timings/12-4-2020?latitude=35.851709500000005&longitude=55.924600499999997&method=5`);
    const hijri = loaded && data.date.hijri ;
    console.log(hijri);
    return (
        <div>
            <h1>أوقات الصلاة</h1>
            {loaded &&  <HijriDate hijri={hijri}/>  }
        </div>
    )
}

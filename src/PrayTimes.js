import React from 'react'
import {useFetch} from './useFetch'

export default function PrayTimes() {

    useFetch(`http://api.aladhan.com/v1/timings/12-4-2020?latitude=35.851709500000005&longitude=55.924600499999997&method=5`);
    return (
        <div>
            <h1>أوقات الصلاة</h1>
        </div>
    )
}

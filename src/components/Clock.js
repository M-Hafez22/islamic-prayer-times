import React from 'react'
import { useCurrentDate } from './hooks/useCurrentDate'

export default function Clock() {
    // Get the current time
    const date = useCurrentDate();
    // Add zero to numbers under 10
    const addZero = (n) => (n < 10 ? `0${n}` : n);
    // Determine night or day 
    const dayOrNight = date.getHours() < 12 ? "AM" : "PM";

    return (
        <div>
            <h2> 
                {addZero(date.getHours())}:
                {addZero(date.getMinutes())}:
                {addZero(date.getSeconds())}
            </h2>
                <h2>{dayOrNight}</h2>
        </div>
    )
}

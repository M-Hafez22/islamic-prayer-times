import React, {useState, useEffect} from 'react'
import { useCurrentDate } from './useCurrentDate'

export default function Clock() {
    
    const date = useCurrentDate();
    
    const addZero = (n) => (n < 10 ? `0${n}` : n);
    const dayOrNight = date.getHours() < 12 ? "صباحًا" : "مساءً";

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

import React, {useState, useEffect} from 'react'

export default function Clock() {
    
    const [date, setDate] = useState(new Date());

    useEffect(() => {
            setInterval(setDate(new Date()), 1000);
        },[date])

    const addZero = (n) => (n < 10 ? `0${n}` : n);

    const dayOrNight = date.getHours() < 12 ? "صباحًا" : "مساءً";
    return (
        <div>
            <h2>
                <span>{dayOrNight}</span> 
                {addZero(date.getHours())}:
                {addZero(date.getMinutes())}:
                {addZero(date.getSeconds())}</h2>
        </div>
    )
}

import React from 'react'

export default function PrayCard({name, time, active}) {

    return (
        <li className={active}>
            <h3>{name}</h3>
            <h3>{time}</h3>
        </li>
    )
}

import React from 'react'

export default function PrayCard({name, time}) {

    return (
        <li>
            <h3>{name}</h3>
            <h3>{time}</h3>
        </li>
    )
}

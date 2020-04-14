import React from 'react'

export default function PrayCard({name, time, cl}) {

    return (
        <li className={cl}>
            <h3>{name}</h3>
            <h3>{time}</h3>
        </li>
    )
}

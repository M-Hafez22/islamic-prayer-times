import React from 'react'

/**
 * Display Pray Name and Time with next pray highlighted
 * 
 * @prop {string}  name the pray name
 * @prop {string}  time  the pray time
 * @prop {boolean}  active  is the next pray or not
 * 
 */
export default function PrayCard({name, time, active}) {

    return (
        <li className={active}>
            <h3>{name}</h3>
            <h3>{time}</h3>
        </li>
    )
}

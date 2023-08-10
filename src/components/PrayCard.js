import React from 'react'
import { to12Format } from './helper/formatTime'
export default function PrayCard({ name, time, active }) {

    return (
        <li className={active}>
            <h3>{name}</h3>
            <h3>{to12Format(time)}</h3>
        </li>
    )
}

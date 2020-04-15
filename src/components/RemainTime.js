import React from 'react'

export default function RemainTime({text ,prayer, time}) {

    return (
        <div>
            <h2>{text} {prayer}</h2>
            <span className="remainTime">{time}</span>
        </div>
    )
}

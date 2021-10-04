import React from 'react'

/**
 * The next pray and Remaining Time for it
 * 
 * @prop {string} text a message
 * @prop {string} prayer the next pray
 * @prop {string} time The Remaining Time for the next pray
 * 
 * @returns 
 */

export default function RemainTime({text ,prayer, time}) {

    return (
        <div>
            <h2>{text} {prayer}</h2>
            <span className="remainTime">{time}</span>
        </div>
    )
}

import React from 'react'

export default function HijriDate({hijri}) {
    return (
        <div>
            <h2>{hijri.weekday.ar} {hijri.day} {hijri.month.ar} {hijri.year}</h2>
        </div>
    )
}

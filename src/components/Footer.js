import React from 'react'
import LanguageToggle from './LanguageToggle'
import TimeZone from './TimeZone'

export default function Footer() {
    return (
        <footer className="footer">
            <LanguageToggle />
            <TimeZone />
        </footer>
    )
}

import React from 'react'
import LanguageToggle from './LanguageToggle'
import TimeZone from './TimeZone'

/**
 * wraps the footer components 
 */
export default function Footer() {
    return (
        <footer className="footer">
            <LanguageToggle />
            <TimeZone />
        </footer>
    )
}

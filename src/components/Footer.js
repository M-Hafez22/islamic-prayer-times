import {useContext} from 'react'
import LanguageToggle from './footer/LanguageToggle'
import TimeZone from './footer/TimeZone'
import ThemeToggle  from './footer/ThemeToggle';
import { ThemeContext } from './contexts/theme'

export default function Footer() {
    const [{isDark} ] = useContext(ThemeContext);
    return (
        <footer className={isDark ? "footerDark" :"footerLight"}>
            <LanguageToggle />
            <TimeZone />
          <ThemeToggle />

        </footer>
    )
}

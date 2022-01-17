import {useContext} from 'react'
import LanguageToggle from './LanguageToggle'
import TimeZone from './TimeZone'
import ThemeToggle  from './ThemeToggle';
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

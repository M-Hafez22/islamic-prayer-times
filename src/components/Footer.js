import {useContext} from 'react'
import Settings  from './footer/Settings';
import { ThemeContext } from './contexts/theme'

export default function Footer() {
    const [{isDark} ] = useContext(ThemeContext);
    return (
        <footer className={isDark ? "footerDark" :"footerLight"}>
            <Settings />
        </footer>
    )
}

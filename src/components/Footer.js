import React, { useContext, useState } from 'react'
import Settings from './footer/Settings';
import { ThemeContext } from './contexts/theme'

export default function Footer() {
    const [{ isDark }] = useContext(ThemeContext);

    // A state for Showing and Hiding Setting section
    const [show, setShow] = useState(false)

    return (
        <footer
            data-testid={'footer'}
            className={isDark ? "footerDark" : "footerLight"}
            style={{ height: show ? '100%' : '4.5em' }}>
            <button onClick={() => setShow(!show)} className='setting-btn'>
                ⚙️
            </button>
            <Settings show={show} />
        </footer>
    )
}

import React, { useContext, useState } from 'react'
import Settings from './footer/Settings';
import { ThemeContext } from './contexts/ThemeContext'

export default function Footer() {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
      throw new Error('useContext must be used within a ThemeProvider');
    }
  
    const { isDark } = themeContext;

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

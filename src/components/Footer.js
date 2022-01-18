import { useContext, useState } from 'react'
import Settings from './footer/Settings';
import { ThemeContext } from './contexts/theme'

export default function Footer() {
    const [{ isDark }] = useContext(ThemeContext);

    // A state for Showing and Hiding Setting section
    const [show, setShow] = useState(false)

    return (
        <footer className={isDark ? "footerDark" : "footerLight"}>
            <button onClick={() => setShow(!show)} className='setting-btn'>
                <img src="../assets/setting.png" alt="⚙️" />
            </button>
            <Settings show={show} />
        </footer>
    )
}

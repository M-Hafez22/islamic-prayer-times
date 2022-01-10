import { useContext } from "react";
import { ThemeContext } from './contexts/theme'


function ThemeToggle() {

  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

    return (
        <button type="button" onClick={toggleTheme} className={isDark ? "toggleThemes dark" : 'toggleThemes light'}>
        {isDark ? "to light" : "to Dark"}
      </button>
    )
}

export default ThemeToggle

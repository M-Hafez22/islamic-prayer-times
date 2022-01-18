import { useContext } from "react";
import { ThemeContext } from '../contexts/theme'


function ThemeToggle() {

  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div>
      <input type="radio" checked={isDark} className={isDark ? "radio-item dark" : 'radio-item light' } onChange={toggleTheme}/> Dark
      <input type="radio" checked={!isDark} className={isDark ? "radio-item dark" : 'radio-item light'} onChange={toggleTheme}/> Light
    </div>
  )
}

export default ThemeToggle

import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

function RadioButton({ label, value, onChange, checked }) {

    // Toggle Themes (Dark, Light)
    const [{ isDark }] = useContext(ThemeContext);
    return (
        <input
            label={label}
            type="radio"
            id={label}
            onChange={onChange}
            name={label}
            value={value}
            checked={checked}
            className={isDark ? "dark" : "light"}
        />
    )
}

export default RadioButton

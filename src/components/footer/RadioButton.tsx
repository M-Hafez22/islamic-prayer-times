import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
interface PropsType {
    label: string,
    value: string,
    onChange: () => void,
    checked: boolean
}
function RadioButton({ label, value, onChange, checked }: PropsType) {

    // Toggle Themes (Dark, Light)
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
      throw new Error('useContext must be used within a ThemeProvider');
    }
  
    const { isDark } = themeContext;
    return (
        <input
            data-testid={label}
            label={label}
            type="radio"
            id={label}
            onChange={onChange}
            name={label}
            value={value}
            checked={checked}
            className={isDark ? "dark " : "light"}
        />
    )
}

export default RadioButton

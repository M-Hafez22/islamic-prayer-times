import { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext';
import RadioButton from './RadioButton';

function ThemeToggle() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useContext must be used within a ThemeProvider');
  }

  const { isDark, toggleTheme } = themeContext;

  return (
    <div className="radio">
      <RadioButton
        label="Dark"
        value={'en'}
        checked={isDark}
        onChange={toggleTheme}
      />
      <RadioButton
        label="Light"
        value={'ar'}
        checked={!isDark}
        onChange={toggleTheme}
      />
    </div>
  );
}

export default ThemeToggle;

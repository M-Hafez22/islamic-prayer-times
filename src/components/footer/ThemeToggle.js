import { useContext } from "react";
import { ThemeContext } from '../contexts/theme'
import RadioButton from './RadioButton'



function ThemeToggle() {

	const [{ isDark }, toggleTheme] = useContext(ThemeContext);

	return (
		<div>
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
			{/* <input type="radio" checked={isDark} className={isDark ? "radio-item dark" : 'radio-item light' } onChange={toggleTheme}/> Dark
      <input type="radio" checked={!isDark} className={isDark ? "radio-item dark" : 'radio-item light'} onChange={toggleTheme}/> Light */}
		</div>
	)
}

export default ThemeToggle

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
		</div>
	)
}

export default ThemeToggle

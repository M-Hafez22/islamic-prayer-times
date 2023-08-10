import LanguageToggle from './LanguageToggle'
import TimeZone from './TimeZone'
import ThemeToggle from './ThemeToggle';

function Settings({ show }) {
    return (
        <div className={show ? "showSettings settings" : "hideSettings settings"} data-testid={'setting'}>
            <LanguageToggle />
            <TimeZone />
            <ThemeToggle />
        </div>
    )
}

export default Settings

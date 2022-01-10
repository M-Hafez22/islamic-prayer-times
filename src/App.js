import {useContext} from 'react';
import Clock from './components/Clock'
import HijriDate from './components/HijriDate'
import PrayTimes from './components/PrayTimes'
import Footer from './components/Footer'
import {FetchedDataProvider} from './components/contexts/FetchedDataContext'
import {LanguageProvider} from './components/contexts/languageContext'
import { ThemeContext } from './components/contexts/theme'
import './styles/main.scss'

function App() {
  const [ {isDark} ] = useContext(ThemeContext);

  return (
    <div  className={isDark  ? 'app dark' : 'app light'}>
      <FetchedDataProvider>
        <LanguageProvider>
          <Clock />
          <HijriDate />
          <PrayTimes />
          <Footer />
        </LanguageProvider>
      </FetchedDataProvider>
    </div>
  );
}

export default App;

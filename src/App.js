import React from 'react';
import Clock from './components/Clock'
import HijriDate from './components/HijriDate'
import PrayTimes from './components/PrayTimes'
import Footer from './components/Footer'
import {FetchedDataProvider} from './components/contexts/FetchedDataContext'
import {LanguageProvider} from './components/contexts/languageContext'
import './styles/main.scss'

function App() {
  return (
    <div className="App">
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

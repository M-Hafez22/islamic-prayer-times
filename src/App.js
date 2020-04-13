import React from 'react';
import Clock from './components/Clock'
import HijriDate from './components/HijriDate'
import PrayTimes from './components/PrayTimes'
import {FetchedDataProvider} from './components/contexts/FetchedDataContext'
import {LanguageProvider} from './components/contexts/languageContext'
import './App.css';

function App() {
  return (
    <div className="App">
      <Clock />
      <FetchedDataProvider>
        <LanguageProvider>
          <HijriDate /> 
          <PrayTimes />
        </LanguageProvider>
      </FetchedDataProvider>
    </div>
  );
}

export default App;

import React from 'react';
import Clock from './components/Clock'
import HijriDate from './components/HijriDate'
import PrayTimes from './components/PrayTimes'
import {FetchedDataProvider} from './components/contexts/FetchedDataContext'
import './App.css';

function App() {
  return (
    <div className="App">
      <Clock />
      <FetchedDataProvider>
        <HijriDate /> 
        <PrayTimes />
      </FetchedDataProvider>
    </div>
  );
}

export default App;

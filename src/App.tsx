import React, { useContext } from 'react';
import Clock from './components/Clock';
import HijriDate from './components/HijriDate';
import PrayTimes from './components/PrayTimes';
import Footer from './components/Footer';
import { FetchedDataProvider } from './components/contexts/FetchedDataContext';
import { LanguageProvider } from './components/contexts/languageContext';
import { ThemeProvider, ThemeContext } from './components/contexts/ThemeContext';
import './styles/main.scss';

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

function MainContent() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useContext must be used within a ThemeProvider');
  }

  const { isDark } = themeContext;

  return (
    <div className={isDark ? 'app dark' : 'app light'} data-testid={'app'}>
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

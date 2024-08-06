import { render } from '@testing-library/react';
import React from 'react';
import App, { MainContent } from './App';
import { ThemeContext, ThemeProvider } from './components/contexts/ThemeContext';
import { LanguageContext } from './components/contexts/languageContext';
import { FetchedDataContext } from './components/contexts/FetchedDataContext';
import { FetchedData, Meta, Timings } from './types';

describe('Testing App', () => {
  const mockFetchedData: { loaded: boolean, data: FetchedData } = {
    loaded: true,
    data: {
      date: {
        gregorian: {
          weekday: {
            en: 'Monday'
          },
          date: '',
          format: '',
          day: '',
          month: {
            number: 0,
            en: ''
          },
          year: '',
          designation: {
            abbreviated: '',
            expanded: ''
          }
        },
        hijri: {
          day: '18',
          month: {
            en: 'Rabi\' al-awwal',
            ar: 'ربيع الأول',
            number: 0
          },
          year: '1445',
          weekday: {
            en: 'Al-Ithnayn',
            ar: 'الإثنين'
          },
          date: '',
          format: '',
          designation: {
            abbreviated: '',
            expanded: ''
          },
          holidays: []
        },
        readable: '',
        timestamp: ''
      },
      timings: {} as Timings,
      meta: {} as Meta
    }
  };

  describe("Renders App in", () => {
    it('light theme', () => {
      const { getAllByTestId } = render(
        <LanguageContext.Provider value={{ language: "ar", setLanguage: () => {} }}>
          <FetchedDataContext.Provider value={mockFetchedData}>
            <ThemeContext.Provider value={{ isDark: false, toggleTheme: () => {} }}>
              <App />
            </ThemeContext.Provider>
          </FetchedDataContext.Provider>
        </LanguageContext.Provider>
      );
      expect(getAllByTestId('app')[0].classList).toContain('light');
    });
  });

  describe("MainContent Component", () => {
    it('throws error when ThemeContext is not provided', () => {
      expect(() => render(<MainContent />)).toThrow('useContext must be used within a ThemeProvider');
    });
  });
});

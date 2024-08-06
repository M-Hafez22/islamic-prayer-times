import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HijriDate from '../HijriDate';
import { LanguageContext } from '../contexts/languageContext';
import { FetchedDataContext } from '../contexts/FetchedDataContext';
import {FetchedData, Meta, Timings} from '../../types'

describe('HijriDate', () => {
  const mockFetchedData: {loaded: boolean, data: FetchedData} = {
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

  const mockLanguageContextEn = {
    language: 'en',
    setLanguage: jest.fn()
  };

  const mockLanguageContextAr = {
    language: 'ar',
    setLanguage: jest.fn()
  };

  it('renders correctly with English language context', () => {
    render(
      <LanguageContext.Provider value={mockLanguageContextEn}>
        <FetchedDataContext.Provider value={mockFetchedData}>
          <HijriDate />
        </FetchedDataContext.Provider>
      </LanguageContext.Provider>
    );

    expect(screen.getByText('Monday 18 Rabi\' al-awwal 1445')).toBeInTheDocument();
  });

  it('renders correctly with Arabic language context', () => {
    render(
      <LanguageContext.Provider value={mockLanguageContextAr}>
        <FetchedDataContext.Provider value={mockFetchedData}>
          <HijriDate />
        </FetchedDataContext.Provider>
      </LanguageContext.Provider>
    );

    expect(screen.getByText('الإثنين 18 ربيع الأول 1445')).toBeInTheDocument();
  });

  it('throws error when LanguageContext is missing', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    expect(() => render(
      <FetchedDataContext.Provider value={mockFetchedData}>
        <HijriDate />
      </FetchedDataContext.Provider>
    )).toThrow('SomeComponent must be used within a LanguageProvider');

    console.error = consoleError;
  });

  it('throws error when FetchedDataContext is missing', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    expect(() => render(
      <LanguageContext.Provider value={mockLanguageContextEn}>
        <HijriDate />
      </LanguageContext.Provider>
    )).toThrow('useContext must be used within a FetchedDataProvider');

    console.error = consoleError;
  });

  it('renders nothing when data is not loaded', () => {
    const mockFetchedDataNotLoaded = {
      loaded: false,
      data: null
    };

    render(
      <LanguageContext.Provider value={mockLanguageContextEn}>
        <FetchedDataContext.Provider value={mockFetchedDataNotLoaded}>
          <HijriDate />
        </FetchedDataContext.Provider>
      </LanguageContext.Provider>
    );

    expect(screen.queryByText('Monday 18 Rabi\' al-awwal 1445')).not.toBeInTheDocument();
    expect(screen.queryByText('الإثنين 18 ربيع الأول 1445')).not.toBeInTheDocument();
  });
});

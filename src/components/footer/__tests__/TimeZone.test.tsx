import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TimeZone from '../TimeZone';
import { FetchedDataContext } from '../../contexts/FetchedDataContext';
import { FetchedData } from '../../../types';

describe('TimeZone', () => {
  const mockFetchedData: FetchedData = {
    timings: {
      Fajr: '05:00',
      Dhuhr: '12:00',
      Asr: '15:00',
      Maghrib: '18:00',
      Isha: '19:30'
    },
    date: {
      readable: '2023-10-01',
      timestamp: '1696118400',
      hijri: {
        date: '1445-03-18',
        format: 'DD-MM-YYYY',
        day: '18',
        weekday: {
          en: 'Monday',
          ar: 'الإثنين'
        },
        month: {
          number: 3,
          en: 'Rabi\' al-awwal',
          ar: 'ربيع الأول'
        },
        year: '1445',
        designation: {
          abbreviated: 'AH',
          expanded: 'Anno Hegirae'
        },
        holidays: []
      },
      gregorian: {
        date: '2023-10-01',
        format: 'DD-MM-YYYY',
        day: '01',
        weekday: {
          en: 'Monday'
        },
        month: {
          number: 10,
          en: 'October'
        },
        year: '2023',
        designation: {
          abbreviated: 'AD',
          expanded: 'Anno Domini'
        }
      }
    },
    meta: {
      latitude: 51.5074,
      longitude: -0.1278,
      timezone: 'UTC',
      method: {
        id: 1,
        name: 'ISNA',
        params: {
          Fajr: 15,
          Isha: 15
        },
        location: {
          latitude: 51.5074,
          longitude: -0.1278
        }
      },
      latitudeAdjustmentMethod: 'ANGLE_BASED',
      midnightMode: 'STANDARD',
      school: 'HANAFI',
      offset: {
        Imsak: 0,
        Fajr: 0,
        Sunrise: 0,
        Dhuhr: 0,
        Asr: 0,
        Maghrib: 0,
        Sunset: 0,
        Isha: 0,
        Midnight: 0
      }
    }
  };

  const mockContextValue = {
    loaded: true,
    data: mockFetchedData
  };

  it('renders without crashing when context is provided', () => {
    render(
      <FetchedDataContext.Provider value={mockContextValue}>
        <TimeZone />
      </FetchedDataContext.Provider>
    );

    expect(screen.getByText('UTC - ISNA')).toBeInTheDocument();
  });

  it('throws an error when context is not provided', () => {
    // Suppress console.error for the specific error we expect to throw
    const consoleError = console.error;
    console.error = jest.fn();

    expect(() => render(<TimeZone />)).toThrow(
      'useContext must be used within a FetchedDataProvider'
    );

    // Restore console.error
    console.error = consoleError;
  });

  it('renders correctly when data is not loaded', () => {
    const mockContextValueNotLoaded = {
      loaded: false,
      data: null,
    };

    render(
      <FetchedDataContext.Provider value={mockContextValueNotLoaded}>
        <TimeZone />
      </FetchedDataContext.Provider>
    );

    expect(screen.queryByText('UTC - ISNA')).not.toBeInTheDocument();
  });
});

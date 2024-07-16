// FetchedDataProvider.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FetchedDataProvider, FetchedDataContext } from '../FetchedDataContext';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { FetchedData } from '../../../types';

const mockData: FetchedData = {
  timings: {
    Fajr: "04:22",
    Dhuhr: "13:01",
    Asr: "16:38",
    Maghrib: "19:57",
    Isha: "21:28",
  },
  date: {
    readable: "16 Jul 2024",
    timestamp: "1721102400",
    hijri: {
      date: "09-01-1446",
      format: "DD-MM-YYYY",
      day: "09",
      weekday: {
        en: "Al Thalaata",
        ar: "الثلاثاء",
      },
      month: {
        number: 1,
        en: "Muḥarram",
        ar: "مُحَرَّم",
      },
      year: "1446",
      designation: {
        abbreviated: "AH",
        expanded: "Anno Hegirae",
      },
      holidays: [],
    },
    gregorian: {
      date: "16-07-2024",
      format: "DD-MM-YYYY",
      day: "16",
      weekday: {
        en: "Tuesday",
      },
      month: {
        number: 7,
        en: "July",
      },
      year: "2024",
      designation: {
        abbreviated: "AD",
        expanded: "Anno Domini",
      },
    },
  },
  meta: {
    latitude: 30.008,
    longitude: 31.2194,
    timezone: "Africa/Cairo",
    method: {
      id: 5,
      name: "Egyptian General Authority of Survey",
      params: {
        Fajr: 19.5,
        Isha: 17.5,
      },
      location: {
        latitude: 30.0444196,
        longitude: 31.2357116,
      },
    },
    latitudeAdjustmentMethod: "ANGLE_BASED",
    midnightMode: "STANDARD",
    school: "STANDARD",
    offset: {
      Imsak: 0,
      Fajr: 0,
      Sunrise: 0,
      Dhuhr: 0,
      Asr: 0,
      Maghrib: 0,
      Sunset: 0,
      Isha: 0,
      Midnight: 0,
    },
  },
};

const server = setupServer(
  rest.get('https://api.aladhan.com/v1/timings/*', (req, res, ctx) => {
    return res(ctx.json({ data: mockData }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const TestComponent = () => {
  const fetchedDataContext = React.useContext(FetchedDataContext);

  if (!fetchedDataContext) {
    throw new Error('useContext must be used within a FetchedDataProvider');
  }

  const { loaded, data } = fetchedDataContext;

  return (
    <div>
      <span data-testid="loaded">{loaded ? 'true' : 'false'}</span>
      <span data-testid="fajr-time">{data?.timings.Fajr}</span>
    </div>
  );
};

describe('FetchedDataProvider', () => {
  test('fetches and provides data correctly', async () => {
    render(
      <FetchedDataProvider>
        <TestComponent />
      </FetchedDataProvider>
    );

    await waitFor(() => expect(screen.getByTestId('loaded')).toHaveTextContent('true'));
    expect(screen.getByTestId('fajr-time')).toHaveTextContent('04:22');
  });
});

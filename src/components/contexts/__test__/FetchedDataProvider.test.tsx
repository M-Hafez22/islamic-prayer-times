import React from 'react';
import { render, screen } from '@testing-library/react';
import { FetchedDataContext, FetchedDataProvider } from '../FetchedDataContext';
import { useFetch } from '../../hooks/useFetch';
import { useLocation } from '../../hooks/useLocation';
import { DateInfo, FetchedData, Meta, Timings } from '../../../types';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useLocation');


describe('FetchedDataProvider', () => {
  const mockUseFetch = useFetch as jest.Mock;
  const mockUseLocation = useLocation as jest.Mock;

  beforeEach(() => {
    mockUseLocation.mockReturnValue([10, 20]); // Mock latitude and longitude
  });

  it('provides loaded and data from useFetch', () => {
    const mockData: FetchedData = {
      timings: {} as Timings,
      date: {} as DateInfo,
      meta: {} as Meta
    };
    mockUseFetch.mockReturnValue([true, mockData]);

    let contextValue: any;
    const TestComponent = () => {
      contextValue = React.useContext(FetchedDataContext);
      return null;
    };

    render(
      <FetchedDataProvider>
        <TestComponent />
      </FetchedDataProvider>
    );

    expect(contextValue).toEqual({ loaded: true, data: mockData });
  });

  it('provides loaded as false when useFetch is loading', () => {
    mockUseFetch.mockReturnValue([null, null]);

    let contextValue: any;
    const TestComponent = () => {
      contextValue = React.useContext(FetchedDataContext);
      return null;
    };

    render(
      <FetchedDataProvider>
        <TestComponent />
      </FetchedDataProvider>
    );

    expect(contextValue).toEqual({ loaded: false, data: null });
  });

  it('renders children correctly', () => {
    mockUseFetch.mockReturnValue([true, null]);

    render(
      <FetchedDataProvider>
        <div data-testid="child">Child Component</div>
      </FetchedDataProvider>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

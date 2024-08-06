import {act} from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useLocation } from '../useLocation';

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
};

Object.defineProperty(global.navigator, 'geolocation', {
  value: mockGeolocation,
  configurable: true,
  writable: true
});
describe('useLocation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns initial latitude and longitude values', () => {
    const { result } = renderHook(() => useLocation());

    expect(result.current[0]).toBe('30.008');
    expect(result.current[1]).toBe('31.2194');
  });

  it('updates latitude and longitude on success', () => {
    const { result } = renderHook(() => useLocation());

    const mockSuccessCallback = mockGeolocation.getCurrentPosition.mock.calls[0][0];

    act(() => {
      mockSuccessCallback({
        coords: {
          latitude: 51.5074,
          longitude: -0.1278,
          altitude: null,
          accuracy: 100,
          altitudeAccuracy: null,
          heading: null,
          speed: null,
        },
        timestamp: Date.now(),
      });
    });

    expect(result.current[0]).toBe('51.5074');
    expect(result.current[1]).toBe('-0.1278');
  });

  it('handles geolocation errors', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const { result } = renderHook(() => useLocation());

    const mockErrorCallback = mockGeolocation.getCurrentPosition.mock.calls[0][1];

    act(() => {
      mockErrorCallback({
        code: 1,
        message: 'User denied Geolocation',
      });
    });

    expect(consoleSpy).toHaveBeenCalledWith('User denied Geolocation');
    expect(result.current[0]).toBe('30.008');
    expect(result.current[1]).toBe('31.2194');
  });

  it('logs a message if geolocation is not supported', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    // Temporarily override the global navigator.geolocation
    const originalGeolocation = global.navigator.geolocation;
    // @ts-ignore
    delete global.navigator.geolocation;
    global.navigator.geolocation = undefined;

    renderHook(() => useLocation());

    expect(consoleSpy).toHaveBeenCalledWith('Geolocation is not supported by your browser');

    // Restore the original navigator.geolocation
    global.navigator.geolocation = originalGeolocation;
  });
});

import { renderHook, act } from '@testing-library/react-hooks';
import { useCurrentDate } from '../useCurrentDate';

jest.useFakeTimers();

describe('useCurrentDate', () => {
  it('returns the initial date value', () => {
    const { result } = renderHook(() => useCurrentDate());
    const initialDate = new Date(result.current);

    expect(result.current).toEqual(initialDate);
  });

  it('updates the date every second', () => {
    const { result } = renderHook(() => useCurrentDate());

    const initialDate = new Date(result.current);
    
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const updatedDate = new Date(result.current);

    expect(updatedDate.getTime()).toBeGreaterThan(initialDate.getTime());
  });

  it('updates the date correctly after multiple intervals', () => {
    const { result } = renderHook(() => useCurrentDate());

    const initialDate = new Date(result.current);
    
    act(() => {
      jest.advanceTimersByTime(3000); // 3 seconds
    });

    const updatedDate = new Date(result.current);

    expect(updatedDate.getTime()).toBeGreaterThan(initialDate.getTime() + 2000);
  });

});

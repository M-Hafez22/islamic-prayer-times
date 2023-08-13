import { act, renderHook } from '@testing-library/react-hooks';
import { useCurrentDate } from '../useCurrentDate';

jest.useFakeTimers();

describe('Unit test for useCurrentDate', () => {
    it('should return the current date', () => {
        const { result } = renderHook(() => useCurrentDate());

        expect(result.current).toBeInstanceOf(Date);
    });

    it('should update the date every second', () => {
        const { result } = renderHook(() => useCurrentDate());

        const initialDate = result.current;
        act(() => {

            // Fast-forward 1 second
            jest.advanceTimersByTime(1000);
        })

        expect(result.current).not.toEqual(initialDate);
    });
});
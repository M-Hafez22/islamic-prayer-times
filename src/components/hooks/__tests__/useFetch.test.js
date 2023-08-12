import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../useFetch';

describe('useFetch', () => {
    it('fetches data from an API and returns the data and loading state', async () => {
        const mockSuccessResponse = { data: 'test data' };
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://test.com'));

        expect(result.current[0]).toBe(false); // check initial loading state
        expect(result.current[1]).toBe(null); // check initial data state

        await waitForNextUpdate(); // wait for hook update

        expect(result.current[0]).toBe(true); // check loading state after fetch
        expect(result.current[1]).toBe('test data'); // check data after fetch

        global.fetch.mockClear();
    });
});
import { act, renderHook } from '@testing-library/react-hooks'
import { useLocation } from './useLocation'

describe('Test useLocation Hook', () => {
    let mockGeolocation

    beforeEach(() => {
        mockGeolocation = {
            getCurrentPosition: jest.fn(),
            watchPosition: jest.fn()
        }
        global.navigator.geolocation = mockGeolocation
    })

    it('returns initial location', () => {
        const { result } = renderHook(() => useLocation())
        expect(result.current[0]).toBe("30.008")
        expect(result.current[1]).toBe("31.2194")
    })

    it('updates location when geolocation is successful', () => {
        const { result } = renderHook(() => useLocation())
        const [latitude, longitude] = result.current

        act(() => {
            const position = { coords: { latitude: "40.7128", longitude: "74.0060" } }
            mockGeolocation.getCurrentPosition.mock.calls[0][0](position)
        })

        expect(result.current[0]).toBe("40.7128")
        expect(result.current[1]).toBe("74.0060")
    })

    it('logs error when geolocation fails', () => {
        console.log = jest.fn()
        const { result } = renderHook(() => useLocation())
        const [latitude, longitude] = result.current

        act(() => {
            const error = { message: "Geolocation not available" }
            mockGeolocation.getCurrentPosition.mock.calls[0][1](error)
        })

        expect(console.log).toHaveBeenCalledWith("Geolocation not available")
    })
})
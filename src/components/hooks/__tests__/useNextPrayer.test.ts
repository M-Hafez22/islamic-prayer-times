import { renderHook } from "@testing-library/react-hooks"
import useNextPrayer from "../useNextPray"

describe("useNextPrayer", () => {
  it("should return remaining time and index for next prayer", () => {
    const times = ["05:00", "12:00", "15:00", "18:00", "20:00"]

    jest.useFakeTimers()
    jest.setSystemTime(new Date(2020, 1, 1, 10))

    const { result } = renderHook(() => useNextPrayer(times))

    expect(result.current[0]).toMatch(/^02:00:00$/)
    expect(result.current[1]).toBe(1)
  })

  it("should handle no remaining prayers today", () => {
    const times = ["05:00", "12:00"]

    jest.useFakeTimers()
    jest.setSystemTime(new Date(2020, 1, 1, 18))

    const { result } = renderHook(() => useNextPrayer(times))

    expect(result.current[0]).toMatch(/^11:00:00$/)
    expect(result.current[1]).toBe(0)
  })
})

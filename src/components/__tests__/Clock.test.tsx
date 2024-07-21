import { render, screen } from "@testing-library/react"
import { LanguageContext } from "../contexts/languageContext"
import Clock from "../Clock"

describe("Clock", () => {
  it("displays the current time in 12 hour format", () => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date("2022-01-01T10:15:30"))

    render(
      <LanguageContext.Provider value={["en"]}>
        <Clock />
      </LanguageContext.Provider>
    )

    expect(screen.getByText("10:15")).toBeInTheDocument()
    expect(screen.getByText("AM")).toBeInTheDocument()
  })

  it("displays seconds with leading zero", () => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date("2022-01-01T10:15:05Z"))

    render(
      <LanguageContext.Provider value={["en"]}>
        <Clock />
      </LanguageContext.Provider>
    )

    expect(screen.getByText(":05")).toBeInTheDocument()
  })

  it("displays AM/PM in English", () => {
    jest.useFakeTimers()

    jest.setSystemTime(new Date("2022-01-01T05:15:05Z"))
    render(
      <LanguageContext.Provider value={["en"]}>
        <Clock />
      </LanguageContext.Provider>
    )
    expect(screen.getByText("AM")).toBeInTheDocument()

    jest.setSystemTime(new Date("2022-01-01T15:15:05Z"))
    render(
      <LanguageContext.Provider value={["en"]}>
        <Clock />
      </LanguageContext.Provider>
    )
    expect(screen.getByText("PM")).toBeInTheDocument()
  })

  it("displays AM/PM in Arabic based on context", () => {
    jest.useFakeTimers()

    jest.setSystemTime(new Date("2022-01-01T05:15:05Z"))
    render(
      <LanguageContext.Provider value={["ar"]}>
        <Clock />
      </LanguageContext.Provider>
    )
    expect(screen.getByText("صباحاً")).toBeInTheDocument()

    jest.setSystemTime(new Date("2022-01-01T15:15:05Z"))
    render(
      <LanguageContext.Provider value={["ar"]}>
        <Clock />
      </LanguageContext.Provider>
    )
    expect(screen.getByText("مساءً")).toBeInTheDocument()
  })
})

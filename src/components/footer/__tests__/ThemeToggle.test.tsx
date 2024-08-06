import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import ThemeToggle from "../ThemeToggle"

describe("ThemeToggle Component", () => {
  it("throws an error when ThemeContext is not provided", () => {
    // Render ThemeToggle without ThemeProvider
    expect(() => render(<ThemeToggle />)).toThrow(
      "useContext must be used within a ThemeProvider"
    )
  })
})

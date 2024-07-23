import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PrayTimes from "../PrayTimes";
import { FetchedDataContext } from "../contexts/FetchedDataContext";
import { LanguageContext } from "../contexts/languageContext";
import { ThemeContext } from "../contexts/ThemeContext";
import useNextPrayer from "../hooks/useNextPray";
import { FetchedData, Meta, Timings } from "../../types";

// Mock child components and hooks
jest.mock("../PrayCard", () => () => <div>PrayCard</div>);
jest.mock("../hooks/useNextPray");

describe("PrayTimes Component", () => {
  const mockTimings = {
    Fajr: "05:00",
    Dhuhr: "12:00",
    Asr: "15:00",
    Maghrib: "18:00",
    Isha: "20:00",
  };

  const fetchedDataContextValue: { loaded: boolean; data: FetchedData } = {
    loaded: true,
    data: {
      date: {
        gregorian: {
          weekday: {
            en: "Monday",
          },
          date: "",
          format: "",
          day: "",
          month: {
            number: 0,
            en: "",
          },
          year: "",
          designation: {
            abbreviated: "",
            expanded: "",
          },
        },
        hijri: {
          day: "18",
          month: {
            en: "Rabi' al-awwal",
            ar: "ربيع الأول",
            number: 0,
          },
          year: "1445",
          weekday: {
            en: "Al-Ithnayn",
            ar: "الإثنين",
          },
          date: "",
          format: "",
          designation: {
            abbreviated: "",
            expanded: "",
          },
          holidays: [],
        },
        readable: "",
        timestamp: "",
      },
      timings: mockTimings,
      meta: {} as Meta,
    },
  };

  const themeContextValue = {
    isDark: false,
    toggleTheme: () => {},
  };

  beforeEach(() => {
    (useNextPrayer as jest.Mock).mockReturnValue(["01:00:00", 0]);
  });

  describe("Error handling", () => {
    it("throws an error if used outside LanguageProvider", () => {
      jest.spyOn(console, "error").mockImplementation(() => {}); // Suppress error output

      expect(() =>
        render(
          <FetchedDataContext.Provider value={fetchedDataContextValue}>
            <ThemeContext.Provider value={themeContextValue}>
              <PrayTimes />
            </ThemeContext.Provider>
          </FetchedDataContext.Provider>
        )
      ).toThrow("SomeComponent must be used within a LanguageProvider");

      (console.error as jest.Mock).mockRestore(); // Restore console.error
    });

    it("throws an error if used outside FetchedDataProvider", () => {
      jest.spyOn(console, "error").mockImplementation(() => {}); // Suppress error output

      expect(() =>
        render(
          <LanguageContext.Provider
            value={{ language: "en", setLanguage: () => {} }}
          >
            <ThemeContext.Provider value={themeContextValue}>
              <PrayTimes />
            </ThemeContext.Provider>
          </LanguageContext.Provider>
        )
      ).toThrow("useContext must be used within a FetchedDataProvider");

      (console.error as jest.Mock).mockRestore(); // Restore console.error
    });

    it("throws an error if used outside ThemeProvider", () => {
      jest.spyOn(console, "error").mockImplementation(() => {}); // Suppress error output

      expect(() =>
        render(
          <FetchedDataContext.Provider value={fetchedDataContextValue}>
            <LanguageContext.Provider
              value={{ language: "en", setLanguage: () => {} }}
            >
              <PrayTimes />
            </LanguageContext.Provider>
          </FetchedDataContext.Provider>
        )
      ).toThrow("useContext must be used within a ThemeProvider");

      (console.error as jest.Mock).mockRestore(); // Restore console.error
    });
  });

  describe("Rendering", () => {
    it("renders without crashing inside all providers", () => {
      render(
        <FetchedDataContext.Provider value={fetchedDataContextValue}>
          <LanguageContext.Provider
            value={{ language: "en", setLanguage: () => {} }}
          >
            <ThemeContext.Provider value={themeContextValue}>
              <PrayTimes />
            </ThemeContext.Provider>
          </LanguageContext.Provider>
        </FetchedDataContext.Provider>
      );
      expect(screen.getByTestId("prayTime")).toBeInTheDocument();
    });

    it("displays prayer times and remaining time", () => {
      render(
        <FetchedDataContext.Provider value={fetchedDataContextValue}>
          <LanguageContext.Provider
            value={{ language: "en", setLanguage: () => {} }}
          >
            <ThemeContext.Provider value={themeContextValue}>
              <PrayTimes />
            </ThemeContext.Provider>
          </LanguageContext.Provider>
        </FetchedDataContext.Provider>
      );

      expect(screen.getByText("01:00:00")).toBeInTheDocument(); // Check for the mocked remaining time
    });

    it('displays "Remaining time to" text when language is "en"', () => {
      render(
        <FetchedDataContext.Provider value={fetchedDataContextValue}>
          <LanguageContext.Provider
            value={{ language: "en", setLanguage: () => {} }}
          >
            <ThemeContext.Provider value={themeContextValue}>
              <PrayTimes />
            </ThemeContext.Provider>
          </LanguageContext.Provider>
        </FetchedDataContext.Provider>
      );

      expect(screen.getByText(/Remaining time to/)).toBeInTheDocument();
    });

    it('displays "يتبقى على رفع أذان" text when language is "ar"', () => {
      render(
        <FetchedDataContext.Provider value={fetchedDataContextValue}>
          <LanguageContext.Provider
            value={{ language: "ar", setLanguage: () => {} }}
          >
            <ThemeContext.Provider value={themeContextValue}>
              <PrayTimes />
            </ThemeContext.Provider>
          </LanguageContext.Provider>
        </FetchedDataContext.Provider>
      );

      expect(screen.getByText(/يتبقى على رفع أذان/)).toBeInTheDocument();
    });
  });

  describe("Theme classes", () => {
    it('applies "prayTimeLight" class when isDark is false', () => {
      render(
        <FetchedDataContext.Provider value={fetchedDataContextValue}>
          <LanguageContext.Provider
            value={{ language: "en", setLanguage: () => {} }}
          >
            <ThemeContext.Provider
              value={{ isDark: false, toggleTheme: () => {} }}
            >
              <PrayTimes />
            </ThemeContext.Provider>
          </LanguageContext.Provider>
        </FetchedDataContext.Provider>
      );

      const prayTimeElement = screen.getByTestId("prayTime");
      expect(prayTimeElement).toHaveClass("prayTimeLight");
    });

    it('applies "prayTimeDark" class when isDark is true', () => {
      render(
        <FetchedDataContext.Provider value={fetchedDataContextValue}>
          <LanguageContext.Provider
            value={{ language: "en", setLanguage: () => {} }}
          >
            <ThemeContext.Provider
              value={{ isDark: true, toggleTheme: () => {} }}
            >
              <PrayTimes />
            </ThemeContext.Provider>
          </LanguageContext.Provider>
        </FetchedDataContext.Provider>
      );

      const prayTimeElement = screen.getByTestId("prayTime");
      expect(prayTimeElement).toHaveClass("prayTimeDark");
    });
  });
});

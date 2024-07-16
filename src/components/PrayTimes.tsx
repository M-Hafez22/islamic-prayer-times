import React, { useContext } from "react"
import PrayCard from "./PrayCard"
import RemainTime from "./RemainTime"
import { FetchedDataContext } from "./contexts/FetchedDataContext"
import { LanguageContext } from "./contexts/languageContext"
import { ThemeContext } from "./contexts/ThemeContext"
import useNextPrayer from "./hooks/useNextPray"

function PrayTimes() {
  // Contexts
  const [language] = useContext(LanguageContext)
  const fetchedDataContext = useContext(FetchedDataContext)

  if (!fetchedDataContext) {
    throw new Error("useContext must be used within a FetchedDataProvider")
  }

  const { loaded, data } = fetchedDataContext

  // Get Prayer Time
  const timings = loaded && data?.timings

  // Remove additional data
  const additional = [
    "Sunrise",
    "Imsak",
    "Midnight",
    "Sunset",
    "Firstthird",
    "Lastthird",
  ]
  additional.forEach(i => {
    if (timings) {
      delete timings[i]
    }
  })

  // Get Prayer Names
  const prayer_en = timings ? Object.keys(timings) : []
  const prayer_ar = ["الفجر", "الظهر", "العصر", "المغرب", "العشاء"]
  const prayerNames = language === "en" ? prayer_en : prayer_ar

  // Get Prayer Times
  const prayTimes = timings ? Object.values(timings) : []
  const [remaineTime, nextPray] = useNextPrayer(prayTimes)

  // Prayer Card
  const prayerTimeList = prayerNames.map((p, i) => (
    <PrayCard
      key={p}
      active={i === nextPray ? "active" : ""}
      name={p}
      time={prayTimes[i]}
    />
  ))

  // Remain Time message
  const text = language === "ar" ? "يتبقى على رفع أذان " : "Remaining time to"
  const prayer = prayerNames[nextPray]

  // Toggle Themes (Dark, Light)
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error("useContext must be used within a ThemeProvider")
  }

  const { isDark } = themeContext

  return (
    <div
      className={isDark ? "prayTimeDark" : "prayTimeLight"}
      data-testid={"prayTime"}
    >
      <ul style={{ flexDirection: language === "ar" ? "row-reverse" : "row" }}>
        {loaded && prayerTimeList}
      </ul>
      {loaded && <RemainTime text={text} prayer={prayer} time={remaineTime} />}
    </div>
  )
}

export default PrayTimes

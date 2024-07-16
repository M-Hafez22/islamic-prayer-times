import React, { useContext } from "react"
import { FetchedDataContext } from "./contexts/FetchedDataContext"
import { LanguageContext } from "./contexts/languageContext"

export default function HijriDate() {
  const [language] = useContext(LanguageContext)
  const fetchedDataContext = useContext(FetchedDataContext)

  if (!fetchedDataContext) {
    throw new Error("useContext must be used within a FetchedDataProvider")
  }

  const { loaded, data } = fetchedDataContext

  if (!loaded || !data) {
    return null
  }

  const { gregorian, hijri } = data.date

  return (
    <div className="date">
      {language === "en" ? (
        <h2>
          {gregorian.weekday.en} {hijri.day} {hijri.month.en} {hijri.year}
        </h2>
      ) : (
        <h2>
          {hijri.weekday.ar} {hijri.day} {hijri.month.ar} {hijri.year}
        </h2>
      )}
    </div>
  )
}

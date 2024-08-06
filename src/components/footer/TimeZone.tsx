import React, { useContext } from "react"
import { FetchedDataContext } from "../contexts/FetchedDataContext"

function TimeZone() {
  const fetchedDataContext = useContext(FetchedDataContext)

  if (!fetchedDataContext) {
    throw new Error("useContext must be used within a FetchedDataProvider")
  }

  const { loaded, data } = fetchedDataContext

  return (
    <h4>
      {loaded && data?.meta.timezone} - {loaded && data?.meta.method.name}
    </h4>
  )
}

export default TimeZone

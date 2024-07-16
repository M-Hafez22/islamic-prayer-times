export interface Timings {
  Fajr: string
  Dhuhr: string
  Asr: string
  Maghrib: string
  Isha: string
  [key: string]: string // To allow additional properties for easy deletion
}

export interface DateInfo {
  readable: string
  timestamp: string
  hijri: {
    date: string
    format: string
    day: string
    weekday: {
      en: string
      ar: string
    }
    month: {
      number: number
      en: string
      ar: string
    }
    year: string
    designation: {
      abbreviated: string
      expanded: string
    }
    holidays: string[]
  }
  gregorian: {
    date: string
    format: string
    day: string
    weekday: {
      en: string
    }
    month: {
      number: number
      en: string
    }
    year: string
    designation: {
      abbreviated: string
      expanded: string
    }
  }
}

export interface Meta {
  latitude: number
  longitude: number
  timezone: string
  method: {
    id: number
    name: string
    params: {
      Fajr: number
      Isha: number
    }
    location: {
      latitude: number
      longitude: number
    }
  }
  latitudeAdjustmentMethod: string
  midnightMode: string
  school: string
  offset: {
    Imsak: number
    Fajr: number
    Sunrise: number
    Dhuhr: number
    Asr: number
    Maghrib: number
    Sunset: number
    Isha: number
    Midnight: number
  }
}

export interface FetchedData {
  timings: Timings
  date: DateInfo
  meta: Meta
}

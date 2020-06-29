
import { useCurrentDate } from './useCurrentDate'
import {getTimeFormat} from '../helper/formatTime'

export default function useNextPrayer(arr) {
    // Get current time
    const date = useCurrentDate();
    // Get the date of the prayer
    const getTime = time => new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.substring(0, 2), time.substring(3, 5), 0, 0);
    const prayDate = arr.map(p => getTime(p))

    // Get the remaining time for each prayer
    const timeLeft = prayDate.map(p => p =(date - p))

    // Get the remaining prayers for today
    const remainingPrayers = timeLeft.filter(el => el < 0)

    // Get the remaining time for the next prayer
    const millisecondsInDay = 86400000;
    let remaineTime = remainingPrayers.length > 0
      ? ( Math.max(...remainingPrayers))
      : (millisecondsInDay - (date - prayDate[0]))

    // Get next Prayer index
    const nextPrayer = timeLeft.indexOf(remaineTime) !== -1
      ? timeLeft.indexOf(remaineTime)
      : 0

    return [getTimeFormat(remaineTime), nextPrayer]
  }

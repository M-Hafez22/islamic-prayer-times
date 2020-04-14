
import { useCurrentDate } from './useCurrentDate'
export default function useNextPrayer(arr) {
    // Get current time
    const date = useCurrentDate();
    // Get the date of the prayer
    const getTime = time => new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.substring(0, 2), time.substring(3, 5), 0, 0);
    const prayDate = arr.map(p => getTime(p))  
    // Get the remaining time for each prayer
    const timeLeft = prayDate.map(p => p =(date - p))
   // time format
    function getTimeFormat (num) {
      num = Math.ceil(Math.abs(num) / 1000)
      const h = Math.floor(num / 3600);
      num  %= 3600;
      const m = Math.floor(num / 60);
      const s =  num % 60;
      return (`${h < 9 ? `0${h}` : h }:${m < 9 ? `0${m}` : m}:${s < 9 ? `0${s}` : s}`)
    }
    // Get the remaining prayers for today 
    const leftPray = timeLeft.filter(el => el < 0)
    // Get the remaining time for the next prayer
    let remaineTime = leftPray.length > 0 ? ( Math.max(...leftPray)) : (86400000 - (date- prayDate[0]))
    // Get next Prayer index
    const nextPrayer = timeLeft.indexOf(remaineTime)

    return [getTimeFormat(remaineTime), nextPrayer]
  }






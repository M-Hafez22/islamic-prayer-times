/**
 * Add leading Zero to numbers
 *  
 * @param {number} number 
 * @returns {string | number} the number with leading zero
 */
export const addLeadingZero = (number) => (number < 10 ? `0${number}` : number);

export const to12Format = (time) => {
  
  let hour = time.slice(0,time.indexOf(":"));
  let minute = time.slice(time.indexOf(":")+1);

  //convert to 12 Formate
  hour = (hour % 12) || 12;

  // formate Look
  hour = addLeadingZero(hour);
  minute.length < 2
    ? minute = addLeadingZero(minute)
    : minute = minute;

  return `${hour}:${minute}`;
}


// Format time ( for nextPray )
export const getTimeFormat = (num) =>{
  num = Math.ceil(Math.abs(num) / 1000);
  const h = Math.floor(num / 3600);
  num  %= 3600;
  const m = Math.floor(num / 60);
  const s =  num % 60;
  return (`${addLeadingZero(h)}:${addLeadingZero(m)}:${addLeadingZero(s)}`)
}

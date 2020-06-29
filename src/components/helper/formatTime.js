
export const addZero = (number) => (number < 10 ? `0${number}` : number);

export const to12Format = (time) => {
  
  let hour = time.slice(0,time.indexOf(":"));
  let minute = time.slice(time.indexOf(":")+1);

  //convert to 12 Formate
  hour = (hour % 12) || 12;

  // formate Look
  hour = addZero(hour);
  minute.length < 2
    ? minute = addZero(minute)
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
  return (`${addZero(h)}:${addZero(m)}:${addZero(s)}`)
}


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

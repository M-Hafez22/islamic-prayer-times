export const addZero = (number) => (number < 10 ? `0${number}` : number);

export const to12Format = (time) => {
  // get the hour
  let hour = time.slice(0,time.indexOf(":"));
  //convert to 12 Formate
  hour = (hour % 12) || 12;
  // Add zero for
  hour = addZero(hour);

  return `${hour}${time.slice(time.indexOf(":"))}`;
}

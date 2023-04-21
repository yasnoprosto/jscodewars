//mpg to kpl converter
/* Create an application that will display the number of kilometers per liter 
(output) based on the number of miles per imperial gallon (input). */

function converter(mpg) {
  let kpl = 0;
  kpl = mpg * (1.609344 / 4.54609188);
  return Number(kpl.toFixed(2));
}

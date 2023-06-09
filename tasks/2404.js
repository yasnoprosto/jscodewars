/* Write a function that takes the website date/time 
in its original string format and returns the shortened format.*/
function shortenToDate(longDate) {
    let commaIndex = longDate.indexOf(",");
    return longDate.slice(0, commaIndex)
  }
/* 
Create a function that accepts a string and a single character, 
and returns an integer of the count of occurrences the 2nd argument is found in the first one.
*/
function strCount(str, letter){  
    let counter = 0;
    let arrayOfLetters = str.split('');

    for(let l of arrayOfLetters) {
      if(letter === l) counter++;
    }

    return counter
  }

  //XOR in JS
  function xor(a, b) {
    a === true ? a = 1 : a = 0;
    b === true ? b = 1 : b = 0;
    return a + b === 1 ? true : false;
  }

  //Is n divisible by x and y?
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0

//power without Math.pow()
const numberToPower = (number, power) => {
  
  let a = number;
  
  if(power === 0) return number / number
  
  for(let i = 1; i < power; i++) {
    a *= number
  }
  
  return a
}
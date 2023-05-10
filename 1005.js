//5 without numbers 

function unusualFive() {
    return "aaaaa".length;
  }

//Take the Derivative
function derive(coefficient,exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`
  }

//Find the Integral
function integrate(coefficient, exponent) {
    return `${coefficient / (exponent + 1)}x^${exponent + 1}`
}

//Find Multiples of a Number
function findMultiples(integer, limit) {
    let array = []
    let firstIntValue = integer;
    let mid = 0;
    while(mid < (limit - (limit % firstIntValue))) {
      mid += firstIntValue
      array.push(mid)
    }
    return array;
  }
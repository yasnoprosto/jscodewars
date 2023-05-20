//array inversing 

const invert = (array) => array.map(a => a * -1);

// return nth even number 

const nthEven = n => n * 2 - 2 

//enough bullets or not? 

const hero = (bullets, dragons) => dragons * 2 - bullets <= 0

// remove every 2nd element 



//??
const removeEveryOther = (arr) => {
  for(let i = 1; i <= arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr
}
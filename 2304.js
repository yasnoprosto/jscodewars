//Cat years, Dog years
let humanYearsCatYearsDogYears = function(humanYears) {
    if(humanYears === 0) return "Zero"
    if(humanYears === 1) return [humanYears, 15, 15]
    if(humanYears === 2) return [humanYears, 24, 24]
    
    let catYears = 24;
    let dogYears = 24;
    
    
    for(let i = 3; i <= humanYears; i++) {  
      catYears += 4;
      dogYears += 5;
    }
    return [humanYears, catYears, dogYears];
  }

  //Find Nearest square number
  function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)), 2)
}

//ES6 String Addition 
function joinStrings(string1, string2){
    return `${string1} ${string2}`
}
//gooseFilter oldschool 
const gooseFilter = (birds) => {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    for(let i = 0; i < birds.length; i++) {
      for(let j = 0; j < geese.length; j++) {
        if(birds[i] === geese[j]) {
          birds.splice(i, 1); 
          i--;
          }
      }
    }
    return birds
    // return an array containing all of the strings in the input array except those that match strings in geese
  };

  //one line decision
  const gooseFilter = (birds) => {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
  }
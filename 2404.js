/* Write a function that takes the website date/time 
in its original string format and returns the shortened format.*/
function shortenToDate(longDate) {
    let commaIndex = longDate.indexOf(",");
    return longDate.slice(0, commaIndex)
  }

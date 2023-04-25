//ASCII Total
const uniTotal = (string) => {
    let sum = 0;
    for(let i = 0; i < string.length; i++) {
      sum += string.charCodeAt(i)
    }
    return sum;
  }

  //century from year
  const century = (year) => {
    return Math.floor(year % 100 == 0 ? year / 100 : year / 100 + 1)
  }
  //Hero creating 
  function Hero (name = "Hero") {
    this.name = name;
    this.position	= '00';
    this.health	= 100;
    this.damage =	5;
    this.experience	= 0;
  }
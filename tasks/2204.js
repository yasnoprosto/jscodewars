// Cube Checker

function cubeChecker(volume, side) {
    if (volume <= 0 || side <= 0) {
      return false;
    }

    let length = volume / (side ** 2);
    let width = length;
    let height = length;
    
    if (length === side && width === side && height === side) {
      return true;
    } else {
      return false;
    }
  }

  //massive destructurization
  function fixTheMeerkat(arr) {
    [arr[0], arr[2]] = [arr[2], arr[0]];
    return arr;
  }

  //replace each char of text to new char
  function replacer(text, char) {
    if (!text || !char) {
      return '';
    }
    
    return text.replace(/./g, char);
  }

  //BMI Calculator 

  function bmi(weight, height) {
    if(weight / height ** 2 <= 18.5) {
      return "Underweight"
    } else if(weight / height ** 2 <= 25.0) {
      return "Normal"
    } else if(weight / height ** 2 <= 30.0) {
      return "Overweight"
    } else if(weight / height ** 2 > 30.0) {
      return "Obese"
    }
 }

 
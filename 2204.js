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
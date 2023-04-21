//mpg to kpl converter
/* 
Create an application that will display the number of kilometers per liter 
(output) based on the number of miles per imperial gallon (input). */

function converter(mpg) {
  let kpl = 0;
  kpl = mpg * (1.609344 / 4.54609188);
  return Number(kpl.toFixed(2));
}

//Grasshopper
//Complete the function to return his total number of goals in all three leagues.

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
  }

//return the volume of a cuboid
  class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
  }
/*
Given a point in a Euclidean plane (x and y), 
return the quadrant the point exists in: 1, 2, 3 or 4 (integer). 
x and y are non-zero integers, therefore the given point never lies on the axes.
*/
function quadrant(x, y) {
    if(x > 0 && y > 0) return 1
    if(x < 0 && y > 0) return 2
    if(x < 0 && y < 0) return 3
    if(x > 0 && y < 0) return 4
  }

  /* Define a function that counts how many more (or less) pieces of toast you need in the toasters.
   Even though you need more or less, the number will still be positive, not negative. */

   function sixToast(num) {
    return Math.abs(6 - num)
  }

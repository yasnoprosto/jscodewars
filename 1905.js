//Name shuffler using string methods
const nameShuffler = (str) => str.split(" ").reverse().join(" ")

/* 
Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: 
1. Split the string into words by spaces.
2. Split each word into separate characters.
3. Join them back with the specified separator.
4. Join all the resulting "words" back into a sentence with spaces.
*/

function splitAndMerge(string, separator) {
  let array = string.split(" ");
  
  let mappedArray = array.map(item => item.split("").join(separator))
  
  return mappedArray.join(" ")
}